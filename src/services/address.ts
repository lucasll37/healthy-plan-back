import { IAddressRepository } from "@/repositories/address/IAddressRepository";

export class AddressTestService {

    private addressRespository: IAddressRepository;

    constructor(addressRespository: IAddressRepository) {
        this.addressRespository = addressRespository;
    }

    async execute() {
        console.log("brilhou!!!");
    }
}