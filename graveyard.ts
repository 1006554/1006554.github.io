import { Background } from "./background.js";
import { Dog } from "./dog.js"
import { Zombie } from "./zombie.js"
 
export class Graveyard {
    private background: Background;
    private zombie: Zombie;
    private dog: Dog;
    x: number;
    y: number;
    horizontalSpeed : number = 0;
    bgSpeed: number = 0;

    constructor(){
        this.create();
        this.play()
        this.update()
    }

    private create(): void{
        this.background = new Background()
        this.dog = new Dog()
        this.zombie = new Zombie()
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
    }

    private play(){
        let audio = new Audio('./music/technophobic_android-zombie_rag.mp3')
        audio.play()
    }

    public checkCollision(a: ClientRect, b : ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    public update(): void{
        this.dog.update(this.horizontalSpeed, 0);
        this.background.update(this.bgSpeed, 0);
        this.zombie.update(this.bgSpeed, 0);
    }

    private onKeyDown(e: KeyboardEvent): any {
        console.log(e.key)
        switch (e.key) {
            case "ArrowLeft":
                this.horizontalSpeed = -3,
                this.bgSpeed = 7;
                break;
            case "ArrowRight":
           
                this.horizontalSpeed = 3,
                this.bgSpeed = -7;
                break;
            default:
                break;
        }
    }
    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.horizontalSpeed = 0,
                this.bgSpeed = 0;
                break
        }
    }
}