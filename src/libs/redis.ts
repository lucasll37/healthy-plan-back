import { createClient } from 'redis';

const client = createClient({
    username: '',
    password: '',
    socket: {
        host: 'localhost',
        port: 6379
    }
});

client.on('error', err => console.log('Redis Client Error', err));

export async function redis() {
    await client.connect();
    return client;
}

