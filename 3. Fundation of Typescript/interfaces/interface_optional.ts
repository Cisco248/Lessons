// ============================================================
// OPTIONAL & READONLY INTERFACE PROPERTIES
// ============================================================

interface Product {
    readonly id: number;
    name: string;
    price: number;
    description?: string;
    discount?: number;
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 999,
    description: "15-inch display",
};

// product.id = 2;  // Error: id is readonly

export { Product, product };
