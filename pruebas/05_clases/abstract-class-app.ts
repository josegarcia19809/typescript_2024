abstract class Employee {
    constructor(
        public first: string,
        public last: string
    ) {
    }

    abstract getPay(): number;

    greet(): void {
        console.log(`HELLO ${this.first} ${this.last}!`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(
        first: string,
        last: string,
        private salary: number
    ) {
        super(first, last);
    }

    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(
        first: string,
        last: string,
        private hourlyRate: number,
        private hoursWorked: number
    ) {
        super(first, last);
    }

    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
betty.greet();
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
bill.greet();
console.log(bill.getPay());