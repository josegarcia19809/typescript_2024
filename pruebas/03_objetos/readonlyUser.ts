type User={
    readonly id: number;
    username: string;
}

const user: User={
    id: 12837,
    username: "John",
};

console.log(user);
//user.id = 5; // No se debería cambiar
console.log(user)