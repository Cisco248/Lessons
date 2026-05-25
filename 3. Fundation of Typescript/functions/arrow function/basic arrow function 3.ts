// ============================================================
// ARROW FUNCTIONS — MULTI-PARAM & OBJECT RETURN
// ============================================================

const signUpUser = (
    name: string,
    email: string,
    password: string,
    isActive: boolean
): string => `${name} ${email} ${password} active:${isActive}`;

const createProfile = (
    name: string,
    age: number
): { name: string; age: number; createdAt: string } => ({
    name,
    age,
    createdAt: new Date().toISOString(),
});

const signup_var = signUpUser("Lahiru", "lahiru@dev.com", "secret", true);
const profile = createProfile("Alex", 28);

export { signUpUser, createProfile, signup_var, profile };
