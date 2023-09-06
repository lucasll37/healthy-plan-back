import { RedisClientType, createClient } from "redis";
import { env } from "../env";

export let connected: boolean;

export let client: RedisClientType | null = createClient({
    url: env.CACHE_URL
});


try {
    client.connect();
    connected = true;
}

catch (error) {
    connected = false;
    client = null;
}
