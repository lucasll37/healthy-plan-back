import { ICache } from "../ICache";
import { RedisConect } from "@/libs/redis";

export class CacheRedis implements ICache {

    private static client = RedisConect();

    async set<T>(id: string, obj: T): Promise<void> {
        try {
            await CacheRedis.client!.set(`${id}`, JSON.stringify(obj));
        }
        catch { return; }
    }
    async get<T>(id: string): Promise<T | null> {
        try {
            const value = await CacheRedis.client!.get(`${id}`);
            if(value) {
                return JSON.parse(value);
            }

            return null;
        }
        catch { return null; }
    }

    async delete(id: string): Promise<void> {
        try {
            await CacheRedis.client!.del(`${id}`);
        }
        catch { return; }
    }
}
