class Course {
  constructor(
    public title: string,
    public price: number
  ) {}

  getDetails(): string {
    return `${this.title} - $${this.price}`;
  }
}

const tsCourse = new Course("TypeScript", 200);
console.log(tsCourse.getDetails()); // "TypeScript - $200"
