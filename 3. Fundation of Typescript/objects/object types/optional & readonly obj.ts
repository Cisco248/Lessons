// ============================================================
// OPTIONAL & READONLY OBJECT PROPERTIES
// ============================================================

interface Student {
    readonly id: number;
    name: string;
    email?: string;
    readonly enrolledYear: number;
}

const student: Student = {
    id: 1,
    name: "Sara",
    enrolledYear: 2022,
};

student.name = "Sarah";
student.email = "sara@school.com";
// student.enrolledYear = 2023;  // Error: readonly

export { Student, student };
