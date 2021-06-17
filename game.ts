
import { Graveyard } from "./graveyard.js"
import { Nonogram } from "./nonogram.js"

export class Game{
   private graveyard: Graveyard

    constructor(){
        this.graveyard = new Graveyard()
        
        this.gameLoop()
    }
    

    private gameLoop(){
        this.graveyard.update();
        requestAnimationFrame(()=>this.gameLoop())
    }
}

new Game()