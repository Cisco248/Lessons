const Array_One: Array<number> = []

const Array_Two: Array<string> = []

const Array_Three: Array<boolean> = []

function Function_One(val: boolean | number): boolean | number {
    return val
}

function Function_Two<T>(val: T): T {
    return val
}

interface Interface_One {
    param_1: string,
    param_2: number,
    param_3: boolean
}

function Function_Three<Interface_One>(
    param_1: string,
    param_2: number,
    param_3: boolean
): Interface_One {
    return {param_1, param_2, param_3} as Interface_One
}

function Function_Four<T> (param_4: T[]): T {
    // do some implementations
    const index = 0
    return param_4[index]
}

const GetVariable = <T>(param_4: T[]): T => {
    // do some implementations
    const index = 0
    return param_4[index]
}

function Function_Five<T, U>(param_1: T, param_2: U): object {
    return { param_1, param_2}
}

function Function_Six<T, U extends string>(param_1: T, param_2: U): object {
    return { param_1, param_2}
}

function Function_Seven<T, U extends number>(param_1: T, param_2: U): object {
    return { param_1, param_2}
}

function Function_Eight<T, U extends boolean>(param_1: T, param_2: U): object {
    return { param_1, param_2}
}

interface Interface_Two {
    param_1: string,
    param_2: string,
    param_3: string
}

function Function_Nine<T extends Interface_Two>(param_1: T): object {
    return { param_1}
}