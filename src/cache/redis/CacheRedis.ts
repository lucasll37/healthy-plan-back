import { ICache } from "../ICache";
import { client } from "@/libs/redis";

export class CacheRedis implements ICache {
    async set<T>(id: string, obj: T): Promise<void> {
        try {
            await client.set(`${id}`, JSON.stringify(obj));
        }
        catch { return; }
    }
    async get<T>(id: string): Promise<T | null> {
        try {
            const value = await client.get(`${id}`);
            if(value) {
                return JSON.parse(value);
            }

            return null;
        }
        catch { return null; }
    }
}
