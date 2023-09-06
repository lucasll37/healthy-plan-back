import { RedisClientType, createClient } from "redis";
import { env } from "../env";

export let connected: boolean;

export async function RedisConect(): Promise<RedisClientType | undefined> {

    const client = createClient({
        url: env.CACHE_URL
    });

    client.connect();

    return new Promise(() => {
        client.on("connect", () => {
            connected = true;
            return client;
        });

        client.on("error", (error) => {
            connected = false;
            return undefined;
        });
    });
}
