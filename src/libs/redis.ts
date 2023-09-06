import { RedisClientType, createClient } from "redis";
import { env } from "../env";

export let connected = false;

export const client: RedisClientType | null = createClient({
    url: env.CACHE_URL
});

client.connect();

client.on("error", (error) => {
    //
});

client.on("ready", () => {
    connected = true;
}
);

client.on("end", () => {
    connected = false;
});
