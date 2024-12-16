class Avenger {
    static avgAge: number = 35;

    static getAvgAge() {
        return this.avgAge; // Lo puede devolver porque también es static
    }

    constructor(
        private name: string,
        private team: string,
        public realName?: string) {
    }

    public biografia() {
        return `Nombre ${this.name}, equipo: ${this.team}, ${this.obtenerNombreReal()}`;
    }

    private obtenerNombreReal() {
        return `nombre real: ${this.realName}`;
    }
}

const antman = new Avenger("Antman", "Capitan", "Scott Lang");

console.log(antman)
console.log(antman.biografia())

console.log(Avenger.avgAge) // Acceso a variable static
console.log(Avenger.getAvgAge()) // Acceso a métod0 static