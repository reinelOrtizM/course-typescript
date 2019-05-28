import { HttpClient } from "../utils/http-client";
import { AxiosPromise } from "axios";
import { UserResponseModel } from "../models/user/user-response.model";
import { ApiConfig } from "../config/api-config";


export class UserService {
    private serviceURL: string = `${ApiConfig.API_URL}/users`;
    private _httpClient: HttpClient;

    constructor(){
        this._httpClient = new HttpClient();
    }

    getUsers(): AxiosPromise<UserResponseModel>{
        return this._httpClient.get(this.serviceURL)
    }
}