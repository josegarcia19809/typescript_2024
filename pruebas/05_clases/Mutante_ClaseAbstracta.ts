abstract class Mutante {
    protected constructor(
        public name: string,
        public realName: string
    ) {
    }

    // Método abstracto que deben implementar las clases derivadas
    abstract mission(): string;

    // Método común para todas las subclases
    getFullIdentity(): string {
        return `${this.name} ${this.realName}`;
    }
}

class Xmen extends Mutante {
    constructor(
        name: string,
        realName: string,
        public team: string
    ) {
        super(name, realName);
    }

    // Implementación del método abstracto
    mission(): string {
        return "Salvar al mundo y proteger a los mutantes.";
    }

    fightForPeace(): string {
        return `${this.name} está luchando por la paz.`;
    }
}

class Villain extends Mutante {
    constructor(
        name: string,
        realName: string,
        public nemesis: string
    ) {
        super(name, realName);
    }

    // Implementación del método abstracto
    mission(): string {
        return 'Conquistar el mundo y derrotar a los X-Men.';
    }

    plotEvilPlan(): string {
        return `${this.name} está tramando un plan contra ${this.nemesis}.`;
    }
}

// Instancias
const cyclops = new Xmen('Cyclops', 'Scott Summers', 'X-Men');
const apocalypse = new Villain('Apocalypse', 'En Sabah Nur', 'X-Men')

// Uso del métod0 abstracto y común
console.log(cyclops.mission())
console.log(apocalypse.mission())

console.log(cyclops.getFullIdentity())
console.log(apocalypse.getFullIdentity())
console.log("---------------------------");

// Métodos específicos de las subclases

console.log(cyclops.fightForPeace())
console.log(apocalypse.plotEvilPlan())
console.log("---------------------------");

// Uso en una función común
const describeCharacter = (character: Mutante) => {
    console.log(`${character.getFullIdentity()} - Misión: ${character.mission()}`)
}

describeCharacter(cyclops)

describeCharacter(apocalypse)