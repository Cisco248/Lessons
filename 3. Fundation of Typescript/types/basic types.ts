// ============================================================
// BASIC TYPE ALIASES
// ============================================================

type User = {
    name: string;
    age: number;
    isActive: boolean;
};

function createUser(data: User): User {
    return data;
}

const user: User = {
    name: "Lahiru",
    age: 25,
    isActive: true,
};

user.name = "Alex";
user.age = 26;
user.isActive = false;

const fromFn = createUser({ name: "Sam", age: 30, isActive: true });

export { User, createUser, user, fromFn };
