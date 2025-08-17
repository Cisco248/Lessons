function returnNever(): never {
  throw new Error("This never returns");
}

/**
 * Throws a new error and never returns (used for crashing or terminating execution).
 *
 * @param errmsg - The error message to throw
 * @throws A new Error with the given message
 * @returns never
 */
function consoleError3(errmsg: string): never {
    throw new Error(errmsg);
}