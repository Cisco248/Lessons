// ============================================================
// INLINE OBJECT TYPES
// ============================================================

const employee: { name: string; salary: number; active: boolean } = {
    name: "John",
    salary: 50000,
    active: true,
};

function printEmployee(emp: { name: string; salary: number }): void {
    console.log(`${emp.name}: $${emp.salary}`);
}

printEmployee(employee);

export { employee, printEmployee };
