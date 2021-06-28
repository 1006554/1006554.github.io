import { GameObject } from "./gameobject.js"
import { Graveyard } from "./graveyard.js"

export class Maggot extends GameObject{
    private speed : number = Math.random() * 3 + 2;
    private screen : Graveyard;

    constructor(screen : Graveyard){
        super("maggot")
        console.log("Avoid the maggots.")
        this.screen = screen
        this.x = Math.random() * 1300
        this.y = -100
    }

    public setPosition(): void{
        if(this.y > -100){
            this.y = -100
        }
    }

    public getPosition(){
        return this.y;
    }
 
    public update(): void{
        this.y += this.speed
        if(this.y > window.innerWidth) {
            this.x = Math.random() * 1300 + 100
            this.y = -100
        } 
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}