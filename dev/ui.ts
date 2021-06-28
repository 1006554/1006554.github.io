import { GameObject } from "./gameobject.js"

export class UI extends GameObject{
    public _score: number = 0;
    x : number = 1200;
    y : number = 5;

    constructor(){
        super("ui")
        this.element.innerHTML = "Score:"
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getScore(){
        return this._score
    }

    public setScore(newScore: number){
        console.log(newScore)
        this._score = newScore;
        this.update()
    }


    public update(){
        this.element.innerHTML = `Score: ${this.getScore()}`
    }
}
