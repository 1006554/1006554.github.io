export class GameObject {

    protected element: HTMLElement
    protected x:number = 0
    protected y:number = 0

    constructor(name:string){
        const gameElement = document.querySelector('game') as HTMLElement
        this.element = document.createElement(name)
        gameElement.appendChild(this.element)
    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

    public remove() {
        this.element.remove()
    }

    public update() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}