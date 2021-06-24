import { Background } from "./background.js";
import { GameObject } from "./gameobject.js"
import { Dog } from "./dog.js"
import { Zombie } from "./zombie.js"
import { Game } from "./game.js"
import { Bone } from "./bone.js" 
import { Maggot } from "./maggot.js"
import { Life } from "./life.js"

export class Graveyard extends GameObject {
    private background: Background;
    private game: Game;
    private zombie: Zombie;
    private dog: Dog;
    private bones : Bone [] = [];
    private maggots : Maggot[] = [];
    private lives : Life [] = [];
    x: number;
    y: number;
   
    bgSpeed: number = 0;

    constructor(g: Game){
        super("gamescreen")
        this.game = g
        this.create();
        this.update()
        const text = document.createElement("instructions")
        text.innerText = "Catch the bones! Avoid the maggots!"
        
    }

    private create(): void{
        this.background = new Background();
        this.dog = new Dog();
        this.zombie = new Zombie();
        
        this.bones.push(new Bone(this), new Bone(this), new Bone(this), new Bone(this), new Bone(this));
        this.maggots.push(new Maggot(this), new Maggot(this), new Maggot(this), new Maggot(this), new Maggot(this));
    }

    public removeBone(bone : Bone){
        this.remove()
    }

    public removeMaggot(maggot : Maggot){
        if (this.maggots.length == 0){
            this.remove()
            this.game.showEndScreen()
        }
    }

    public checkCollision(a: ClientRect, b : ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    public update(): void{
        if (this.checkCollision(this.dog.getFurureRectangle(), this.zombie.getRectangle())) {
        } else {
              this.dog.update(); 
        }
      
       this.zombie.update();
        for (let b of this.bones) {
            b.update();
            if(this.checkCollision(this.dog.getRectangle(), b.getRectangle())){
                this.removeBone(b);
            }
        }
        for (let m of this.maggots){
            m.update();
            if(this.checkCollision(this.dog.getRectangle(), m.getRectangle())){
                this.removeMaggot(m)
            }
    }
    }
}