class Class_One {

    public param_1: string
    public param_2: string

    public Param_1(): string {
        return this.param_1
    }

    // Getter for Param_1 to access the private method
    get Param_Get(): string {
        return this.Param_1();
    }

    // Setter for Param_1 to set the value of param
    set Param_Set(param: string) {
        this.param_1 = param;
    }
}

// Example usage:
const cls = new Class_One();
// This will work because Param_1 is public
cls.param_1 = 'this is a public method';

export { Class_One }