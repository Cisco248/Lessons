// ============================================================
// GENERIC INTERFACES & TYPE ALIASES
// ============================================================

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

interface Repository<T> {
    getAll(): T[];
    getById(id: number): T | undefined;
    create(item: T): T;
}

type Result<T, E = string> =
    | { success: true; value: T }
    | { success: false; error: E };

class InMemoryRepo<T extends { id: number }> implements Repository<T> {
    private items: T[] = [];

    getAll(): T[] {
        return [...this.items];
    }

    getById(id: number): T | undefined {
        return this.items.find((item) => item.id === id);
    }

    create(item: T): T {
        this.items.push(item);
        return item;
    }
}

const userResponse: ApiResponse<{ name: string }> = {
    data: { name: "Lahiru" },
    status: 200,
    message: "OK",
};

const okResult: Result<number> = { success: true, value: 42 };
const errResult: Result<number> = { success: false, error: "Not found" };

const repo = new InMemoryRepo<{ id: number; name: string }>();
repo.create({ id: 1, name: "Alex" });

export { ApiResponse, Repository, Result, InMemoryRepo, userResponse, okResult, errResult, repo };
