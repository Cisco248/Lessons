/**
 * Sign-up function to collect user details
 *
 * @param name - User's name
 * @param email - User's email
 * @param password - User's password
 * @param isPaid - Boolean indicating if the user has paid
 * @returns A combined string with all user data
 */
function signUpUser(name: string, email: string, password: any, isPaid: boolean) {
    return `${name}, ${email}, ${password}, ${isPaid}`;
}

// Call signUpUser and store result in 'su'
signUpUser("cisco", "cisco@dev.com", "@123", true)