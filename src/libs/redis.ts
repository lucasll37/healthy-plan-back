import { RedisClientType, createClient } from "redis";
import { env } from "../env";

export async function getRedisClient(): Promise<RedisClientType | null> {
    const client: RedisClientType | null = createClient({
        url: env.CACHE_URL
    });

    client.connect();

    return new Promise((resolve, reject) => {
        client.on("error", (error) => {
            resolve(null);
        });

        client.on("ready", () => {
            resolve(client);
        });
    });
}
