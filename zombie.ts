export class Zombie {
    private x: number = 2000
    private y: number = 450
    private div : HTMLElement

    constructor(){
        console.log("This zombie looks like they have a problem for me to solve")
        this.create()
    }

    public getClientRect() : DOMRect {
        return this.div.getBoundingClientRect();
    }
    
    private create() : void {
        this.div = document.createElement("zombie")
         this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 
        document.body.appendChild(this.div)

    }

    public update(xspeed: number, yspeed: number): void{
        this.x += xspeed;
        this.y += yspeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }

}