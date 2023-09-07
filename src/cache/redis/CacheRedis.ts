import { RedisClientType } from "redis";
import { ICache } from "../ICache";
import { getRedisClient } from "@/libs/redis";

export class CacheRedis implements ICache {
    private static instance: CacheRedis | null = null;
    private client: RedisClientType | null = null;
    public isConnected = false;

    private constructor() {}


    static async init(): Promise<void> {
        if(!CacheRedis.instance) {
            CacheRedis.instance = new CacheRedis();
            CacheRedis.instance.client = await getRedisClient();
            CacheRedis.instance.isConnected = CacheRedis.instance.client !== null;
        }

        return new Promise((resolve, reject) => {
            if(CacheRedis.instance!.isConnected) {
                resolve();
            }
            else {
                reject();
            }
        });
    }

    static getInstance(): CacheRedis | null {
        return CacheRedis.instance;
    }

    async set<T>(id: string, obj: T): Promise<void> {
        if(!this.client) return;

        try {
            await this.client.set(`${id}`, JSON.stringify(obj));
        }
        catch { return; }
    }

    async get<T>(id: string): Promise<T | null> {
        if(!this.client) return null;

        try {
            const value = await this.client.get(`${id}`);
            if(value) {
                return JSON.parse(value);
            }

            return null;
        }
        catch { return null; }
    }

    async delete(id: string): Promise<void> {
        if(!this.client) return;

        try {
            await this.client.del(`${id}`);
        }
        catch { return; }
    }
}
