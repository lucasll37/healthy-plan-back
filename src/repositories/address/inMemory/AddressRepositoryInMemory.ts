import { Address, Prisma } from "@prisma/client";
import { IAddressRepository } from "../IAddressRepository";

type IData = Prisma.AddressCreateArgs;

export class AddressRepositoryInMemory implements IAddressRepository {

    private addresses: Address[] = [];

    async create(data: Prisma.AddressCreateInput): Promise<Address> {
        const address: Address = {
            id: String(this.addresses.length + 1),
            athleteId: "sdf",
            ...data
        };
        this.addresses.push(address);

        return new Promise(resolve => resolve(address));
    }
}