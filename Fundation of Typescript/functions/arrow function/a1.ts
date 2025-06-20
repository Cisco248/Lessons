/**
 * Logs in a user using username and password.
 *
 * @param username - The username of the user
 * @param password - The user's password (any type for flexibility)
 * @returns A combined string of username and password
 */
let loginUser = (username: string, password: any) => {
    return `${username} ${password}`;
}

// Call loginUser with sample data and store the result in log_var
let log_var = loginUser("cisco", '@123');