import { HttpClient } from "../utils/http-client.util";
import { AxiosPromise } from "axios";
import { UserResponseModel } from "../models/user/user-response.model";
import { ApiConf } from "../config/api-conf.config";


export class UserService {
    private serviceURL: string = `${ApiConf.API_URL}/users`;
    private _httpClient: HttpClient;

    constructor(){
        this._httpClient = new HttpClient();
    }

    getUsers(): AxiosPromise<UserResponseModel>{
        return this._httpClient.get(this.serviceURL)
    }
}