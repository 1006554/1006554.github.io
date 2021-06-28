import { GameObject } from "./gameobject.js";
export class Maggot extends GameObject {
    constructor(screen) {
        super("maggot");
        this.speed = Math.random() * 3 + 2;
        console.log("Avoid the maggots.");
        this.screen = screen;
        this.x = Math.random() * 1300;
        this.y = -100;
    }
    setPosition() {
        if (this.y > -100) {
            this.y = -100;
        }
    }
    getPosition() {
        return this.y;
    }
    update() {
        this.y += this.speed;
        if (this.y > window.innerWidth) {
            this.x = Math.random() * 1300 + 100;
            this.y = -100;
        }
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=maggot.js.map