import fastify from "fastify";
import { appRoutes } from "./routers";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { swaggerConfig, swaggerUIConfig } from "./libs/swagger";
import cors from '@fastify/cors';
import { env } from "./env";
import { populateRepositoriesWithMock } from "./mocks";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import { corsOptions } from "./config/cors"
import { JWTConfig } from "./libs/jwt";
import { errorHandler } from "./middleware/errorHandler";


export const app = fastify();

app.register(cors, corsOptions);
app.register(fastifyJwt, JWTConfig)
app.register(fastifyCookie);

if(env.NODE_ENV !== "production") {
    // populateRepositoriesWithMock()
    app.register(swagger, swaggerConfig);
    app.register(swaggerUI, swaggerUIConfig);
}

app.register(appRoutes);
app.setErrorHandler(errorHandler);
