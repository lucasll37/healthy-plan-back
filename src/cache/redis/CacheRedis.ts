import { ICache } from "../ICache";
import { client, connected } from "@/libs/redis";

export class CacheRedis implements ICache {

    private static client = client;
    private static isConnected = connected;

    async set<T>(id: string, obj: T): Promise<void> {
        if(!CacheRedis.client) return;

        try {
            await CacheRedis.client.set(`${id}`, JSON.stringify(obj));
        }
        catch { return; }
    }

    async get<T>(id: string): Promise<T | null> {
        if(!CacheRedis.client) return null;

        try {
            const value = await CacheRedis.client.get(`${id}`);
            if(value) {
                return JSON.parse(value);
            }

            return null;
        }
        catch { return null; }
    }

    async delete(id: string): Promise<void> {
        if(!CacheRedis.client) return;

        try {
            await CacheRedis.client.del(`${id}`);
        }
        catch { return; }
    }

    isConnected(): boolean {
        return CacheRedis.isConnected;
    }
}
