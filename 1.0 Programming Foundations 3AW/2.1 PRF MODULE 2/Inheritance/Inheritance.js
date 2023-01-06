class House {
    constructor(name) {
        this.name = name;
    }
    info() {
        return 'This house is the: ' + this.name + '. ';
    }
}

class Villa extends House {
    constructor(name, prestige) {
        super(name);
        this.prestige = prestige;
    }
    info() {
        return super.info() + 'It has the prestige ' + this.prestige + ' out of 10. ';
    }
}
class DetachedHouse extends House {
    constructor(name, hasGarden) {
        super(name);
        this.hasGarden = hasGarden;
    }
}
let villa = new Villa(("Not so prestigious villa",1))
let detachedHouse = new DetachedHouse("Small house, but with the garden", true)
console.log(villa.info());
console.log(detachedHouse.info());
