import { Game } from "./game.js"
import { GameObject } from "./gameobject.js"

export class Zombie extends GameObject {
    x: number = 1400
    y: number = 450

    constructor(){
        super("zombie")
    }

    public update(): void{
        super.update()
    }
}