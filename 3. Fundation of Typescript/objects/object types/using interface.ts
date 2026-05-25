// ============================================================
// OBJECTS WITH INTERFACES
// ============================================================

interface Product {
    id: number;
    title: string;
    price: number;
}

const item: Product = {
    id: 101,
    title: "Mouse",
    price: 2500,
};

function applyDiscount(product: Product, percent: number): Product {
    return {
        ...product,
        price: product.price * (1 - percent / 100),
    };
}

const discounted = applyDiscount(item, 10);

export { Product, item, applyDiscount, discounted };
