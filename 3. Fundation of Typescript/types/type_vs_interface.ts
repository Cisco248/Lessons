// ============================================================
// TYPE ALIAS vs INTERFACE
// ============================================================

// Interface — extendable, mergeable
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// Type alias — unions, primitives, tuples
type Pet = Cat | DogType;

interface Cat {
    name: string;
    lives: number;
}

type DogType = {
    name: string;
    breed: string;
};

const dog: Dog = { name: "Max", breed: "Labrador" };
const cat: Cat = { name: "Whiskers", lives: 9 };

export { Animal, Dog, Cat, DogType, Pet, dog, cat };
