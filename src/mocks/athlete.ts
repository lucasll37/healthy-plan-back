import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";


export const athleteMock: Prisma.AthleteCreateInput = {
    name: "John",
    surname: "Doe",
    phone: "123456789",
    email: `${randomUUID()}@mock.com`,
    sex: "M",
    birthDate: new Date("1995-05-05"),

}
