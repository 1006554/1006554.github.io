import { Game } from "./game.js"
import { GameObject } from "./gameobject.js"

export class Zombie extends GameObject {
    private game : Game
    x: number = 1400
    y: number = 450
    private div : HTMLElement

    constructor(){
        super("zombie")
    }

    public update(): void{
        super.update()
    }

}