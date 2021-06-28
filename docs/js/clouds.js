import { GameObject } from "./gameobject.js";
export class Clouds extends GameObject {
    constructor() {
        super("clouds");
        this.x = 0;
        this.element.style.backgroundPosition = `${this.x}px 0px`;
    }
}
//# sourceMappingURL=clouds.js.map