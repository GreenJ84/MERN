class Card{
    constructor( name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor( name, cost, res, power){
        super( name, cost);
        this.res = res;
        this.power = power;
    }

    attack ( target ){
        if ( target instanceof Unit){
            target.res -= this.power;
        } 
        else { throw new Error( "Target must be a unit!" ); }
    }
}

class Effect extends Card{
    constructor( name, cost, text, stat, magnitude){
        super( name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play( target ) {
        if( target instanceof Unit ) {
            let x = this.stat;
            target[this.stat] += this.magnitude;
        } 
        else { throw new Error( "Target must be a unit!" ); }
    }
}

// Turn 1
let redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
let hardAlgoritm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
    console.log(redBeltNinja);
hardAlgoritm.play( redBeltNinja );
hardAlgoritm.play( hardAlgoritm );
    console.log(redBeltNinja);


// Turn 2
let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
let unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
unhandledPromiseRejection.play( redBeltNinja );
hardAlgoritm.play( hardAlgoritm );
    console.log(redBeltNinja);


// Turn 3
let pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
pairProgramming.play( redBeltNinja );
pairProgramming.play( hardAlgoritm );
    console.log(redBeltNinja);

    console.log(blackBeltNinja);
redBeltNinja.attack( blackBeltNinja );
    console.log(blackBeltNinja);





