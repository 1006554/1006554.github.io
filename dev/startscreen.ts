import { GameObject } from "./gameobject.js"
import { Game } from "./game.js"

export class StartScreen extends GameObject {

    private game : Game
    
    constructor(game:Game) {
        super("startscreen")
        this.game = game;
        
        const logo = document.createElement("logo")
        const btn = document.createElement("button")
    

        this.element.appendChild(logo)
        this.element.appendChild(btn)
    
        btn.innerText = "START GAME"
        btn.addEventListener("click", () => this.gotoGameScreen())  
        
    }

    private gotoGameScreen(){
        this.remove()
        this.game.showGameScreen()
    }

}