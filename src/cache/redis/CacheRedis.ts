import { RedisClientType } from "redis";
import { ICache } from "../ICache";
import { getRedisClient } from "@/libs/redis";

export class CacheRedis implements ICache {
    private static instance: CacheRedis | null = null;
    private static client: RedisClientType | null = null;
    static isConnected = false;

    private constructor() {}

    static getInstance(): CacheRedis | null {
        return CacheRedis.instance;
    }

    static async init(): Promise<void> {
        if(!CacheRedis.client) {
            CacheRedis.client = await getRedisClient();
            CacheRedis.isConnected = CacheRedis.client !== null;
        }
        return new Promise((resolve, reject) => {
            if(CacheRedis.isConnected) {
                resolve();
            }
            else {
                reject();
            }
        });
    }


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
}
