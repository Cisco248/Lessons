// ============================================================
// BUILT-IN UTILITY TYPES (Generics)
// ============================================================

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Partial<T> — all properties optional
type PartialUser = Partial<User>;

// Required<T> — all properties required
type RequiredUser = Required<PartialUser>;

// Readonly<T> — cannot reassign properties
type ReadonlyUser = Readonly<User>;

// Pick<T, K> — select specific keys
type UserPreview = Pick<User, "id" | "name">;

// Omit<T, K> — exclude specific keys
type UserWithoutEmail = Omit<User, "email">;

// Record<K, V> — object with keys K and values V
type RolePermissions = Record<string, boolean>;

const partial: PartialUser = { name: "Lahiru" };
const preview: UserPreview = { id: 1, name: "Lahiru" };
const withoutEmail: UserWithoutEmail = { id: 1, name: "Lahiru", age: 25 };
const permissions: RolePermissions = { admin: true, editor: false };

export {
    partial,
    preview,
    withoutEmail,
    permissions,
    PartialUser,
    UserPreview,
    UserWithoutEmail,
    RolePermissions,
};
