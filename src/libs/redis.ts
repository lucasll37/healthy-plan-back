import { createClient } from "redis";
import { env } from "../env";

export let connected: boolean;

export function RedisConect() {
    const client = createClient({
        url: env.CACHE_URL
    });

    try {
        client.connect();
        connected = true;
        return client;
    }
    catch {
        connected = false;
        return null;
    }
}
