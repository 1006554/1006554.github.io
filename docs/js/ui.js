import { GameObject } from "./gameobject.js";
export class UI extends GameObject {
    constructor() {
        super("ui");
        this._score = 0;
        this.x = 1200;
        this.y = 5;
        this.element.innerHTML = "Score:";
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    getScore() {
        return this._score;
    }
    setScore(newScore) {
        console.log(newScore);
        this._score = newScore;
        this.update();
    }
    update() {
        this.element.innerHTML = `Score: ${this.getScore()}`;
    }
}
//# sourceMappingURL=ui.js.map