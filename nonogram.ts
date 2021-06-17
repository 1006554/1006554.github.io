export class Nonogram {
    rect: HTMLElement
    private x : number 
    private y : number 
    constructor(){ 
        this.create()
    }
    private create(){
        this.rect = document.createElement("rectangle");
        document.body.appendChild(this.rect)
    }
}

new Nonogram();