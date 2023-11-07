import { FastifyRequest, FastifyReply } from "fastify";
import { TrainerRepositoryPrisma } from "../repositories/trainer/prisma/TrainerRepositoryPrisma";
import { AuthenticateService } from "../services/session";
import { z } from "zod";
import { InvalidCredenctialsError } from "../errors/invalid-credentials";


export class AuthenticateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        const trainerRepositoryPrisma = new TrainerRepositoryPrisma();
        const authenticateService = new AuthenticateService(trainerRepositoryPrisma);

        const authenticateBodySchema = z.object({
            email: z.string().email(),
            password: z.string().min(6),
        });


        try {
            const { email, password } = authenticateBodySchema.parse(request.body);
            const { trainer } = await authenticateService.execute({ email, password });

            const token = await reply.jwtSign({
                // role: trainer.role,
            }, {
                sign: {
                    sub: trainer.id,
                }
            });

            const refreshToken = await reply.jwtSign({
                // role: trainer.role,
            }, {
                sign: {
                    sub: trainer.id,
                    expiresIn: "7d"
                }
            });

            return reply
                .setCookie("refreshToken", refreshToken, {
                    path: "/",
                    secure: true, // https? set true
                    sameSite: true, // somente acessado pelo mesmo site
                    httpOnly: true, // somente acessado pelo backend
                })
                .status(201).send({ token });
        }

        catch(error) {
            if(error instanceof InvalidCredenctialsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}

export class RefreshTokenController {

    async handler(request: FastifyRequest, reply: FastifyReply) {
        await request.jwtVerify({ onlyCookie: true });

        const token = await reply.jwtSign({
            // role: trainer.role,
        }, {
            sign: {
                sub: request.user.sub,
            }
        });

        const refreshToken = await reply.jwtSign({
            // role: trainer.role,
        }, {
            sign: {
                sub: request.user.sub,
                expiresIn: "1d"
            }
        });

        return reply
            .setCookie("refreshToken", refreshToken, {
                path: "/",
                secure: true, // https? set true
                sameSite: true, // somente acessado pelo mesmo site
                httpOnly: true, // somente acessado pelo backend
            })
            .status(201).send({ token });
    }
}
