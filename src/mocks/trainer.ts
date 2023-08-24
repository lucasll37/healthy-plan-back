import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";


export const trainerMock: Prisma.TrainerCreateInput = {
    name: "John",
    surname: "Doe",
    email: `${randomUUID()}@mock.com`,
    password: "123456"
}
