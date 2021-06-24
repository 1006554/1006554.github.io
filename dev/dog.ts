import { Game } from "./game.js"
import { GameObject } from "./gameobject.js"
import { Life } from "./life.js"

export class Dog extends GameObject{
    private game : Game
    private _score : number = 0
    private lives : Life [] = [];
    public horizontalSpeed : number = 0;
    x : number = 3;
    y : number = 560;

    constructor(){
        super("dog")
        console.log("Dog has risen from the dead!")
        this.lives.push(new Life(this)),(new Life(this)),(new Life(this)),(new Life(this));
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));
    }

    getFurureRectangle(){
        let rect = this.element.getBoundingClientRect()
        rect.x += this.horizontalSpeed
        return rect
     }

     get score() {
        return this._score
    }


    public update(): void{
        this.x += this.horizontalSpeed
        super.update()
    }


    private onKeyDown(e: KeyboardEvent): any {
        console.log(e.key)
        switch (e.key) {
            case "ArrowLeft":
                this.horizontalSpeed = -5;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 5;
                break;
            default:
                break;
        }
    }
    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.horizontalSpeed = 0;
                break
        }
    }
}