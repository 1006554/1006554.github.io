export class Dog{
    div: HTMLElement
    private x : number = 500;
    private y : number = 560;

    constructor(){
        console.log("Dog has risen from the dead!")
        this.create()
    }

    private create(){
        this.div = document.createElement("dog")
        document.body.appendChild(this.div)
    }

    public update(xspeed: number, yspeed: number): void{
        this.x += xspeed;
        this.y += yspeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }
}