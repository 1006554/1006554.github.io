import { GameObject } from "./gameobject.js";
export class StartScreen extends GameObject {
    constructor(game) {
        super("startscreen");
        this.game = game;
        const logo = document.createElement("logo");
        const btn = document.createElement("button");
        this.element.appendChild(logo);
        this.element.appendChild(btn);
        btn.innerText = "START GAME";
        btn.addEventListener("click", () => this.gotoGameScreen());
    }
    gotoGameScreen() {
        this.remove();
        this.game.showGameScreen();
    }
}
# sourceMappingURL=startscreen.js.map
