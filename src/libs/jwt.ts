import { env } from "../env";

export const JWTConfig = {
    secret: env.JWT_SECRET,
    cookie: {
        signed: false,
        cookieName: 'refreshToken',
    },
    sign: {
        expiresIn: "10m",
    }
}