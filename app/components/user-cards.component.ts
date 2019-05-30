import { UserModel } from "../models/user/user.model";
import { UserService } from "../services/user.service";
import { IRenderComponent } from "../core/icomponents/irender.component";
import { BaseComponent } from "../core/base-component.core";
import { ConstOptionsComponent } from "../core/options/const-option-component";
import { UserAddressModel } from "../models/commons/address.model";
import { GeoModel } from "../models/commons/geo.model";
import { UserCompanyModel } from "../models/user/user-company.model";

//import * as template from "./user.component.hbs";

export class UserCards extends BaseComponent implements IRenderComponent {
    
    users: Array<UserModel> = [];

    constructor(options: ConstOptionsComponent, private _userServ: UserService = new UserService()){
        super(options);
    }

    render(){

        const template = require("./user.component.hbs");

        this._userServ.getUsers().then( response => {
            this.users = response.data.users;
            this.renderFromParent(template, this.users);
        });
    }

    renderFromParent(template: any , users: Array<UserModel>){
        super.render({
            template: template,
            data: {
                users: users
            }
        });
    }
}