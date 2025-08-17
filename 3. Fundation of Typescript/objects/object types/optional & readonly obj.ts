interface Student {
  id: number;
  name: string;
  email?: string;           // optional
  readonly enrolledYear: number; // cannot be changed
}

const student: Student = {
  id: 1,
  name: "Sara",
  enrolledYear: 2022
};

// student.enrolledYear = 2023; ❌ Error: Cannot assign to 'enrolledYear'

export {}