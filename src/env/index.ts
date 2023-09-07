import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["dev",  "test", "production"]).default("dev"),
    HOST: z.string().default("localhost"),
    PORT: z.coerce.number().default(3000),
    JWT_SECRET: z.string().default("dammy-secret"),
    DATABASE_URL: z.string(),
    CACHE_URL: z.string().optional()
});

const _env = envSchema.safeParse(process.env);

if(!_env.success) {
    // eslint-disable-next-line no-console
    console.error("Invalid enviroment variables", _env.error.format());
    throw new Error("Invalid enviroment variables");
}

export const env = _env.data;
