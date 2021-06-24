import { GameObject } from "./gameobject.js"
import { Dog } from "./dog.js"
import { Graveyard } from "./graveyard.js"

export class Life extends GameObject {
  

    constructor(d:Dog){
        super("life")  
         this.x = 10;
         this.y = 7;
    }

    public update(): void{

        for(let i = 0; i <= 4; i++){
            this.x += i
        }
      
    }
}