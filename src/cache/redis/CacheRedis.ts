import { RedisClientType } from "redis";
import { ICache } from "../ICache";
import { RedisConect } from "@/libs/redis";

export class CacheRedis implements ICache {

    private static client: RedisClientType | undefined;

    async set<T>(id: string, obj: T): Promise<void> {
        try {
            if(!CacheRedis.client === undefined) {
                CacheRedis.client = await RedisConect();
            }
            await CacheRedis.client!.set(`${id}`, JSON.stringify(obj));
        }
        catch { return; }
    }
    async get<T>(id: string): Promise<T | null> {
        try {
            if(!CacheRedis.client === undefined) {
                CacheRedis.client = await RedisConect();
            }
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
            if(!CacheRedis.client === undefined) {
                CacheRedis.client = await RedisConect();
            }
            await CacheRedis.client!.del(`${id}`);
        }
        catch { return; }
    }
}
