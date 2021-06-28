import { GameObject } from "./gameobject.js";
export class Dog extends GameObject {
    constructor() {
        super("dog");
        this.horizontalSpeed = 0;
        this.x = 0;
        this.y = 0;
        console.log("Dog has risen from the dead!");
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    spawn() {
        this.x = 5;
        this.y = 560;
        console.log(this.x, this.y);
    }
    getFutureRectangle() {
        let rect = this.element.getBoundingClientRect();
        rect.x += this.horizontalSpeed;
        return rect;
    }
    update() {
        this.x += this.horizontalSpeed;
        super.update();
    }
    onKeyDown(e) {
        console.log(e.key);
        switch (e.key) {
            case "ArrowLeft":
                this.element.classList.add('left');
                this.horizontalSpeed = -8;
                break;
            case "ArrowRight":
                this.element.classList.remove('left');
                this.horizontalSpeed = 8;
                break;
            default:
                break;
        }
    }
    onKeyUp(e) {
        switch (e.key.toUpperCase()) {
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.horizontalSpeed = 0;
                break;
        }
    }
}
//# sourceMappingURL=dog.js.map