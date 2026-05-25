// ============================================================
// BASIC INTERFACES
// ============================================================

interface User {
    name: string;
    age: number;
    isActive: boolean;
    greet?(): string;
    setName(name: string): void;
}

const user: User = {
    name: "Lahiru",
    age: 25,
    isActive: true,
    setName(name: string) {
        this.name = name;
    },
};

user.setName("Alex");
const greeting = user.greet?.() ?? `Hi, ${user.name}`;

export { User, user, greeting };
