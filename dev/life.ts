import { GameObject } from "./gameobject.js"
import { Dog } from "./dog.js"

export class Life extends GameObject {

    constructor(d:Dog, i: number){
        super("life")
        this.x = 10;
        this.y = 7;
        this.x = i*this.element.clientWidth
        super.update();
    }
}