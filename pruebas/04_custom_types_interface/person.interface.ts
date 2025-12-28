// models/person.interface.ts
interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;

    sayHi(): string;
}

const thomas: Person = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 21837,
    sayHi: () => "Hello!",
};

console.log(thomas);
console.log()
console.log(thomas.sayHi());