// import { Address, Prisma } from "@prisma/client";
// import { IAddressRepository } from "../IAddressRepository";
// import { randomUUID } from "node:crypto";

// type IData = Prisma.AddressCreateArgs;

// export class AddressRepositoryInMemory implements IAddressRepository {

//     private addresses: Address[] = [];

//     async create(data: Prisma.AddressCreateInput): Promise<Address> {
//         const address: Address = {
//             ...data,
//             // id: randomUUID(),
//             // createdAt: new Date(),
//             // updatedAt: null
//         };
//         this.addresses.push(address);

//         return new Promise(resolve => resolve(address));
//     }
// }