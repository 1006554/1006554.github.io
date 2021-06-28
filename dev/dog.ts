import { GameObject } from "./gameobject.js"

export class Dog extends GameObject{
    public horizontalSpeed : number = 0;
    x : number = 0;
    y : number = 0;

    constructor(){
        super("dog")
        console.log("Dog has risen from the dead!")
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e));
    }

    public spawn(){
        this.x = 5;
        this.y = 560;
        console.log(this.x, this.y)
    }

    public getFutureRectangle(){
        let rect = this.element.getBoundingClientRect()
        rect.x += this.horizontalSpeed
        return rect
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
                this.element.classList.add('left')
                break;
            case "ArrowRight":
                this.horizontalSpeed = 5;
                this.element.classList.remove('left')
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