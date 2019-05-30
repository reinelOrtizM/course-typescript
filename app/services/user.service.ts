import { HttpClient } from "../utils/http-client.util";
import { AxiosPromise } from "axios";
import { ApiConf } from "../config/api-conf.config";
import { UserResponseModel } from "../models/response/user-response.model";


export class UserService {
    //private serviceURL: string = `${ApiConf.API_URL}/users`;
    private serviceURL: string = `${ApiConf.API_URL}/5cf0449030000019dc3cd58d`;
    private _httpClient: HttpClient;

    constructor(){
        this._httpClient = new HttpClient();
    }

    getUsers(): AxiosPromise<UserResponseModel>{
        return this._httpClient.get(this.serviceURL);
    }
}