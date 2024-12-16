class Avenger {
    constructor(
        private name: string,
        public realName: string) {
        console.log("Constructor Avenger")
    }

    protected getFullName() {
        return `${this.name} ${this.realName}`;
    }
}

class XMen extends Avenger {
    constructor(
        name: string,
        realName: string,
        public isMutant: boolean
    ) {
        super(name, realName);
        console.log("Constructor XMen")
    }

    public getFullnameDesdeXmen() {
        return super.getFullName() + ", is mutant: " + this.isMutant
    }
}

const wolferine = new XMen("Wolferine", "Logan", true)
console.log(wolferine.getFullnameDesdeXmen())