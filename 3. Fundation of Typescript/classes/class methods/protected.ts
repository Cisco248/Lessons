class Class_One {

    public param_1: string
    public param_2: string

    protected Param_1(): string {
        return this.param_1
    }
}

class Class_Two extends Class_One {

    // Getter for Param_1 to access the private method
    get Param_Get(): string {
        return this.Param_1();
    }

    // Setter for Param_1 to set the value of param
    set Param_Set(param: string) {
        this.param_1 = param;
    }
}

const cls = new Class_Two()
cls.Param_Set = 'New String Value'
