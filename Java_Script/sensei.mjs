import { Ninja } from "./ninjaClass.mjs";

class Sensei extends Ninja{
    constructor(name){
        super(name);
        super.health = 200;
        super.speed = 10;
        super.strength = 10;

        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();

        var wiseWords = [
        "What one programmer can do in one month, two programmers can do in two months.",
        "It is not the code, it is the comma",
        "Without a doubt, syntax errors",
        "You may need log statements everywhere, and that is okay",
        "Better not tell you now.",
        "Concentrate on the task at hand, not the project as a whole",
    ];
    var choice = wiseWords[Math.round( Math.random() * (wiseWords.length-1))];
    console.log(choice);
    }
}

const sensei = new Sensei("Master Splinter");
sensei.showStats();

sensei.speakWisdom();
sensei.showStats();
console.log(sensei.wisdom);