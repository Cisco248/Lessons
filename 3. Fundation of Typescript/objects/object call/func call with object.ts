// ============================================================
// PASSING OBJECTS TO FUNCTIONS (DESTRUCTURING)
// ============================================================

interface UserPayload {
    name: string;
    isPaid: boolean;
    email?: string;
}

function createUser({ name, isPaid }: UserPayload): void {
    console.log(`${name}, paid: ${isPaid}`);
}

function updateUser(user: UserPayload): UserPayload {
    return { ...user, isPaid: true };
}

const newUser: UserPayload = {
    name: "Lahiru",
    isPaid: false,
    email: "lahiru@dev.com",
};

createUser(newUser);
const updated = updateUser(newUser);

export { UserPayload, createUser, updateUser, newUser, updated };
