class Juggler {
    constructor(name, bonus) {
        this.name = name;
        this.bonus = bonus;
    }
    get getName(){
        return this.name;
    }
}

var funky = new Juggler("funky", "126");
funky.getName();