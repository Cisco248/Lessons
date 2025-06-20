function createUser(name: string, age: number) {
  return {
    name,
    age,
    greet() {
      return `Hello, ${name}`;
    }
  };
}

const user = createUser("Lahiru", 25);
console.log(user.greet()); // Hello, Lahiru
