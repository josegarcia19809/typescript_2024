class User {
    constructor(public username: string) {}
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        console.log(entity.username);
    } else {
        console.log(entity.name);
    }
}

// Uso
printName(new User("jose"));
printName(new Company("OpenAI"));
