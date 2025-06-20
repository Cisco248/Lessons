/**
 * Signs up a user with provided details.
 *
 * @param name - The name of the user
 * @param email - The user's email address
 * @param password - The user's chosen password
 * @param isActive - A boolean indicating if the user is active
 * @returns A combined string of name, email, and password
 */
var signUpUser = (name: string, email: string, password: any, isActive: boolean) => {
    return `${name} ${email} ${password}`;
}

// Call signUpUser with sample data and store the result in signup_var
let signup_var = signUpUser("cisco", "Cisco@dev.com", '@123', true);