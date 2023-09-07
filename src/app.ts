import fastify from "fastify";
import { appRoutes } from "@/routers";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { swaggerConfig, swaggerUIConfig } from "@/libs/swagger";
import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import { corsOptions } from "@config/cors";
import { JWTConfig } from "@libs/jwt";
import { errorHandler } from "@middlewares/errorHandler";


export const app = fastify();

app.register(cors, corsOptions);
app.register(fastifyJwt, JWTConfig);
app.register(fastifyCookie);
app.register(swagger, swaggerConfig);
app.register(swaggerUI, swaggerUIConfig);
app.register(appRoutes);
app.setErrorHandler(errorHandler);
