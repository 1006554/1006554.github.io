export class Background{
    div: HTMLElement
    private x : number = 0;
    private y : number = 0; 

    constructor(){
        this.create()
    }

    private create(){
        this.div = document.createElement("graveyard")
        document.body.appendChild(this.div)
    }

    public update(xspeed: number, yspeed: number): void{
        this.x += xspeed;
        this.y += yspeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }
}