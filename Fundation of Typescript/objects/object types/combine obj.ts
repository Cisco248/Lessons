type A = { a: string };
type B = { b: number };

type Combined = A & B;

const obj: Combined = {
  a: "value",
  b: 123
};

export {}