type Address = {
  city: string;
  zip: number;
};

type Customer = {
  name: string;
  address: Address;
};

const customer: Customer = {
  name: "Alex",
  address: {
    city: "Colombo",
    zip: 10100
  }
};

export {}