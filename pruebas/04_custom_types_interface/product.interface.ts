// models/product.interface.ts
interface Product {
    name: string;
    price: number;

    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
        this.price = this.price * (1 - amount);
        return this.price;
    },
};

console.log(shoes);
const {name, price} = shoes
console.log()
console.log(name, price)
console.log()
console.log(shoes.applyDiscount(0.4));