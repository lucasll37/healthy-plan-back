import { createClient } from 'redis';
import { env } from '../env';

export const client = createClient({
    url: env.CACHE_URL
}).connect();
