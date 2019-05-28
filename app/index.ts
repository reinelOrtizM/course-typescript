import { UserService } from "./services/user-service";

class App {
    startApp() {
        console.log(">> Start my First App");

        const service: UserService = new UserService();
        service.getUsers().then(response => {
            console.warn(response.data);
        });
    }
}

new App().startApp();