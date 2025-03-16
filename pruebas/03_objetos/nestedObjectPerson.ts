type Person = {
    name: string;
    age: number;
    parentNames: {
        mom: string;
        dad: string,
    }
}

const describePerson = (person: Person) => {
    return `Persona: ${person.name},
Age: ${person.age},
parents: ${person.parentNames.mom}, ${person.parentNames.dad}`.trim();
}

console.log(describePerson({name: "Luis", age: 45, parentNames: {mom: "luz", dad: "sidoro"}}))