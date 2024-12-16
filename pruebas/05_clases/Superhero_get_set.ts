class Superhero {
    constructor(
        public alias: string,
        public realName: string
    ) {
    }

    protected getFullIdentity(): string {
        return `${this.alias} ${this.realName}`;
    }
}

class Villain extends Superhero {
    private _evilPlan: string;

    constructor(
        alias: string,
        realName: string,
        public isDangerous: boolean
    ) {
        super(alias, realName);
        this._evilPlan = "Sin plan definido";
    }

    // Setter
    set evilPlan(plan: string) {
        if (plan.length < 5) {
            throw new Error("El plan debe tener al menos 5 caracteres")
        }
        this._evilPlan = plan;
    }

    // Getter
    get evilPlan(): string {
        return this._evilPlan;
    }

    showFullIdentity() {
        console.log(super.getFullIdentity());
    }
}

const magneto = new Villain('Magneto', 'Erik Lehnsherr', true);

console.log(magneto)
// Usar el getter
console.log(magneto.evilPlan)

// Usar el setter
magneto.evilPlan = "Dominar el mundo";
console.log(magneto.evilPlan);

// Intentando establecer un plan inválido
try {
    magneto.evilPlan = "Mal";
} catch (e) {
    console.error(`ERROR: ${e.message}`);
}

// Llamando a un método protegido desde la clase derivada
magneto.showFullIdentity()