import { Graveyard } from "./graveyard.js"
import { EndScreen } from "./endscreen.js"
import { GameObject } from "./gameobject.js"
import { StartScreen } from "./startscreen.js"
import { Clouds } from "./clouds.js"

export class Game {
    private music : HTMLAudioElement 
    private screen: GameObject
    private clouds : Clouds

    constructor(){
        this.clouds = new Clouds();
        this.screen = new StartScreen(this)
        this.music = new Audio("./music/bone-yard-waltz.mp3")
        this.music.loop = true;
        this.music.play()
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