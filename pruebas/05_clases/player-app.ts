class Player {
    constructor(
        public first: string,
        public last: string,
        protected _score: number
    ) {
    }

    private secretMethod(): void {
        console.log("SECRET METHOD!!");
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}

// Uso
const elton = new Player("Elton", "Steele", 100);
console.log(elton.fullName);
elton.score = 150;
console.log(elton.score);
