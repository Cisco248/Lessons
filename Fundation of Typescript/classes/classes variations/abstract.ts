abstract class Class_One {
    constructor(
        public param_1: string, // A required string
        public param_2: number, // A required number
        public param_3: boolean // A required boolean
    ){}

    abstract Method_One(): void
}

class Class_Two extends Class_One {
    constructor(
        public param_1: string,
        public param_2: number,
        public param_3: boolean
    ){
        super(param_1, param_2, param_3)
    }
    Method_One(): void {
        // implement the abstrct method
        }
}

export { Class_Two}