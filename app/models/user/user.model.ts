import { UserAddressModel } from "./user-address.model";
import { UserCompanyModel } from "./user-company.model";

export class UserModel {

    id: string;
    name: string;
    username: string;
    email: string;
    address: UserAddressModel;
    phone: string;
    website: string;
    company: UserCompanyModel;
}