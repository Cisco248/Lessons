// ============================================================
// OBJECTS FROM CLASSES
// ============================================================

class UserAccount {
    constructor(
        public name: string,
        public email: string,
        private password: string
    ) {}

    greet(): string {
        return `Hello, ${this.name}`;
    }
}

const account = new UserAccount("Lahiru", "lahiru@dev.com", "secret");
const message = account.greet();

export { UserAccount, account, message };
