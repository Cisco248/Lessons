/**
 * Returns a greeting message based on the provided input.
 *
 * @param text - The input string (usually a name or label)
 * @returns A greeting message string like "Hello cisco"
 */
const getHello = (text: string): string => {
    return `Hello ${text}`;
}

// Call getHello with the name "cisco" and store the result in text_var
getHello("cisco");
