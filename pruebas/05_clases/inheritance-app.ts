class Player {
    constructor(
        public first: string,
        public last: string,
        protected _score: number
    ) {}

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;

    maxScore(): void {
        this._score = 99999999;
    }
}

// Uso
const admin = new SuperPlayer("Admin", "User", 500);
admin.maxScore();
console.log(admin.fullName);
