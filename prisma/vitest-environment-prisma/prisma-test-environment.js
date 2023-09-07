"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const node_crypto_1 = require("node:crypto");
const child_process_1 = require("child_process");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function generateDatabaseURL(schema) {
    if (!process.env.DATABASE_URL) {
        throw new Error("Missing DATABASE_URL environment var");
    }
    const url = new URL(process.env.DATABASE_URL);
    url.searchParams.set("schema", schema);
    return url.toString();
}
exports.default = {
    name: "prisma",
    transformMode: "web",
    async setup() {
        const schema = (0, node_crypto_1.randomUUID)();
        process.env.DATABASE_URL = generateDatabaseURL(schema);
        (0, child_process_1.execSync)("npx prisma migrate deploy");
        return {
            async teardown() {
                await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
                await prisma.$disconnect();
            }
        };
    }
};
