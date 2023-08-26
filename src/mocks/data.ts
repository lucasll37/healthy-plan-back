import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";


export const trainerMock: Prisma.TrainerCreateInput = {
    name: "John",
    surname: "Doe",
    email: `${randomUUID()}@mock.com`,
    password: "123456",
    phone: "123456789"
}

export const athleteMock: Prisma.AthleteCreateInput = {
    name: "John",
    surname: "Doe",
    phone: "123456789",
    email: `${randomUUID()}@mock.com`,
    sex: "M",
    birthDate: new Date("1995-05-05"),
    avatar: "https://www.google.com",
    observation: "observation", 
    trainer: {
        connect: {
            id: "will be replaced by id trainer mock"
        }
    },
    address: {
        create: {
            addressInfo: "Rua dos bobos",
            addressNumber: "0",
            cep: "cep",
            city: "São Sosé dos Campos",
            state: "SP"
        }
    }
}
