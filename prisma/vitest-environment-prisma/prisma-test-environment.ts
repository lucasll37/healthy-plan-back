import 'dotenv/config'
import { randomUUID } from "crypto";
import { Environment } from "vitest";
import { execSync } from 'child_process';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function generateDatabaseURL(schema: string) {
if(!process.env.DATABASE_URL) {
    throw new Error('Missing DATABASE_URL environment var');
    }

    const url = new URL(process.env.DATABASE_URL)
    url.searchParams.set('schema', schema)

    return url.toString()
}

export default <Environment>{
    name: 'prisma',
    transformMode: 'web',
    // async setupVM() {
    //   const vm = await import('node:vm')
    //   const context = vm.createContext()
    //   return {
    //     getVmContext() {
    //       return context
    //     },
    //     teardown() {
    //       // called after all tests with this env have been run
    //     }
    //   }
    // },
    async setup() {
    const schema = randomUUID()
    console.log(generateDatabaseURL(schema))
    process.env.DATABASE_URL = generateDatabaseURL(schema)
    execSync(`npx prisma migrate deploy --preview-feature --schema=${schema}`)

        return {
            async teardown() {
            await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
            await prisma.$disconnect();
            }
        }
    }
}