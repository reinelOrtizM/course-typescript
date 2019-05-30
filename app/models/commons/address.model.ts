import { GeoModel } from "./geo.model";

export class UserAddressModel {

     street: string;
     suite: string;
     city: string;
     zipcode: string;
     geo: GeoModel;
}