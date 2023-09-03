import { createClient } from "redis";
import { env } from "../env";


export function RedisConect() {
    const client = createClient({
        url: env.CACHE_URL
    });

    try {
        client.connect();
        // eslint-disable-next-line no-console
        console.log("Redis connected!");
        return client;
    }
    catch {
        // eslint-disable-next-line no-console
        console.log("Redis not connected!");
        return null;
    }
}
