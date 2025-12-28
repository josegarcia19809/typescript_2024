// enums_orders.ts

// Enum numérico
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED;
}


const myStatus = OrderStatus.DELIVERED;
console.log(isDelivered(myStatus)); // true
console.log(isDelivered(OrderStatus.RETURNED)); // false

