import { ICache, IEntity } from "../ICache";
import { redis } from "@/libs/redis";

export class CacheRedis implements ICache {
    async set(entity: IEntity, id: string, obj: Object): Promise<void> {
        const client = await redis();
        await client.set(`${entity}-${id}`, JSON.stringify(obj));
    }
    async get(entity: IEntity, id: string): Promise<Object | null> {
        const client = await redis();
        const value = await client.get(`${entity}-${id}`);
        if(value) return JSON.parse(value);
        return null;
    }
}
