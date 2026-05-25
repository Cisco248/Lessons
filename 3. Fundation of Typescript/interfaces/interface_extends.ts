// ============================================================
// INTERFACE EXTENDS (INHERITANCE)
// ============================================================

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

interface Manager extends Employee {
    teamSize: number;
}

const manager: Manager = {
    name: "Lahiru",
    age: 30,
    employeeId: 1001,
    department: "Engineering",
    teamSize: 8,
};

export { Person, Employee, Manager, manager };
