// ============================================================
// DICTIONARY (OBJECT) ENUMS IN TYPESCRIPT
// ============================================================
// When enum values are objects (dictionaries), use `as const`
// objects. This pattern is ideal for config maps, metadata,
// and structured constants.

const UserRole = {
    Admin: { id: 1, label: "Administrator", level: 10 },
    Editor: { id: 2, label: "Editor", level: 5 },
    Viewer: { id: 3, label: "Viewer", level: 1 },
} as const;

const ApiEndpoint = {
    Users: { path: "/api/users", method: "GET" },
    CreateUser: { path: "/api/users", method: "POST" },
    UserById: { path: "/api/users/:id", method: "GET" },
} as const;

type UserRole = typeof UserRole[keyof typeof UserRole];
type ApiEndpoint = typeof ApiEndpoint[keyof typeof ApiEndpoint];

// ============================================================
// METHOD 1: Direct dot notation (name → object)
// ============================================================
const role: UserRole = UserRole.Admin;
// { id: 1, label: "Administrator", level: 10 }

const endpoint: ApiEndpoint = ApiEndpoint.Users;
// { path: "/api/users", method: "GET" }

// ============================================================
// METHOD 2: Bracket notation with variable key
// ============================================================
const roleKey: keyof typeof UserRole = "Editor";
const roleFromKey = UserRole[roleKey];
// { id: 2, label: "Editor", level: 5 }

// ============================================================
// METHOD 3: Access nested properties from enum value
// ============================================================
const adminLabel = UserRole.Admin.label;           // "Administrator"
const usersPath = ApiEndpoint.Users.path;          // "/api/users"

// ============================================================
// METHOD 4: Object.keys() — enum member names
// ============================================================
const roleKeys = Object.keys(UserRole);
// ["Admin", "Editor", "Viewer"]

// ============================================================
// METHOD 5: Object.values() — array of dict objects
// ============================================================
const roleValues = Object.values(UserRole);
// [{ id: 1, ... }, { id: 2, ... }, { id: 3, ... }]

// ============================================================
// METHOD 6: Object.entries() — [name, object] pairs
// ============================================================
const roleEntries = Object.entries(UserRole);

// ============================================================
// METHOD 7: for...in loop
// ============================================================
for (const key in UserRole) {
    const entry = UserRole[key as keyof typeof UserRole];
    console.log(`${key}: ${entry.label} (level ${entry.level})`);
}

// ============================================================
// METHOD 8: Array methods — find, filter, map
// ============================================================
const highLevel = roleValues.filter((r) => r.level >= 5);
// [Admin, Editor]

const roleOptions = roleEntries.map(([name, data]) => ({
    name,
    id: data.id,
    label: data.label,
}));

const findById = roleValues.find((r) => r.id === 2);  // Editor role object

// ============================================================
// METHOD 9: keyof typeof — type-safe member names
// ============================================================
type RoleName = keyof typeof UserRole;

function getRoleByName(name: RoleName): UserRole {
    return UserRole[name];
}

const viewer = getRoleByName("Viewer");

// ============================================================
// METHOD 10: Find member name by nested property
// ============================================================
function getRoleNameById(id: number): RoleName | undefined {
    return (Object.keys(UserRole) as RoleName[]).find(
        (key) => UserRole[key].id === id
    );
}

const roleName = getRoleNameById(1);               // "Admin"

// ============================================================
// METHOD 11: Spread / clone dict enum values safely
// ============================================================
const adminCopy = { ...UserRole.Admin };
const mergedEndpoint = {
    ...ApiEndpoint.Users,
    version: "v1",
};

export {
    UserRole,
    ApiEndpoint,
    role,
    endpoint,
    roleFromKey,
    adminLabel,
    usersPath,
    roleKeys,
    roleValues,
    roleEntries,
    highLevel,
    roleOptions,
    findById,
    getRoleByName,
    getRoleNameById,
    roleName,
    adminCopy,
    mergedEndpoint,
};
