import { Prisma, Address } from "@prisma/client";

export interface IAddressRepository {
    create(data: Prisma.AddressCreateInput): Promise<Address>
}