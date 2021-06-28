import { Graveyard } from "./graveyard.js";
import { EndScreen } from "./endscreen.js";
import { StartScreen } from "./startscreen.js";
import { Clouds } from "./clouds.js";
export class Game {
    constructor() {
        this.clouds = new Clouds();
        this.screen = new StartScreen(this);
        this.music = new Audio("./music/bone-yard-waltz.mp3");
        this.music.loop = true;
        this.music.play();
        this.gameLoop();
    }
    showGameScreen() {
        this.screen = new Graveyard(this);
    }
    showEndScreen() {
        this.screen = new EndScreen(this);
    }
    gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map
