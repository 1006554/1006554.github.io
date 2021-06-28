import { GameObject } from "./gameobject.js";
export class Life extends GameObject {
    constructor(d, i) {
        super("life");
        this.x = 10;
        this.y = 7;
        this.x = i * this.element.clientWidth;
        super.update();
    }
}
//# sourceMappingURL=life.js.map