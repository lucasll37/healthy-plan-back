import { Address, Prisma } from "@prisma/client";
import { IAddressRepository } from "../IAddressRepository";
import { prisma } from "@/libs/prisma";

export class AddressRepositoryPrisma implements IAddressRepository {

    async create(data: Prisma.AddressCreateArgs): Promise<Address> {
        return await prisma.address.create(data);
    }
}