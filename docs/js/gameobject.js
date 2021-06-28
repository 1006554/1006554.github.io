export class GameObject {
    constructor(name) {
        this.x = 0;
        this.y = 0;
        const gameElement = document.querySelector('game');
        this.element = document.createElement(name);
        gameElement.appendChild(this.element);
    }
    getRectangle() {
        return this.element.getBoundingClientRect();
    }
    remove() {
        this.element.remove();
    }
    update() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=gameobject.js.map