import { RenderOptions } from "./options/render-options";
import { ConstOptionsComponent } from "./options/const-option-component";

export class BaseComponent {
    selector: string;

    constructor(options: ConstOptionsComponent) {
        this.selector = options.selector;
    }

    render(options: RenderOptions) {
        if(this.selector){
            const $element = document.querySelector(this.selector);
            $element.innerHTML = options.template(options.data);
        }
    }
}