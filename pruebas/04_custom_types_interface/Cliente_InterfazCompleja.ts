interface Address{
    readonly  id: number;
    zip: string;
    city: string;
}

interface Client{
    readonly name: string;
    age?: number;
    readonly  address: Address;
    getFullAddress(addressId: string): string;
}

const client: Client = {
    name: "Melissa",
    age: 35,
    address:{
        id: 125,
        zip: "UYT SUD",
        city: "OIttawa"
    },
    getFullAddress(addressId: string): string {
        const {id, city}= this.address;
        return parseInt(addressId)===id ? city: 'ID no coincide con la dirección';
    }
}

const client2: Client = {
    name: 'Carolina',
    age: 30,
    address: {
        id: 120,
        zip: 'K2S U2A',
        city: 'Toronto'
    },
    getFullAddress(addressId: string): string {
        const { id, city } = this.address;
        return parseInt(addressId) === id ? city : 'ID no coincide con la dirección';
    }
};

console.log(client)
console.log()
console.log(client2.getFullAddress("120"))


/*

El código está bien estructurado y funcional, pero hay algunos puntos que podrían mejorarse
para hacerlo más robusto, legible y ajustado a las mejores prácticas de TypeScript:

1. Uso de readonly para propiedades inmutables
Si las propiedades no deben ser modificadas después de su inicialización, es recomendable
marcarlas como readonly. Por ejemplo, el nombre del cliente o el ID de la dirección
probablemente no deberían cambiar.
 */