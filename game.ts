import { Graveyard } from "./graveyard.js"
import { EndScreen } from "./endscreen.js"
import { GameObject } from "./gameobject.js"
import { StartScreen } from "./startscreen.js"
import { Dog } from "./dog.js"

export class Game {
    private sound : HTMLAudioElement = new Audio("./music/zombie_garden.mp3")
    private screen: GameObject
    private dog : Dog

    constructor(){
        this.screen = new StartScreen(this)
        this.sound.play()
        this.gameLoop()
    }

    public showGameScreen(){
        this.screen = new Graveyard(this)
    }

    public showEndScreen(){
        this.screen = new EndScreen(this)
    }
    

    private gameLoop(){
        this.screen.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
        
}
new Game()