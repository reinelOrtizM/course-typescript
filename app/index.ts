import { UserService } from "./services/user.service";
import { UserCards } from "./components/user-cards.component";

class App {
    startApp() {
        console.log(">> Start my First App");
        new UserCards({
            selector: '#user-container'
        }).render();
    }
}

new App().startApp();