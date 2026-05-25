// ============================================================
// FUNCTION RETURN TYPE: void
// ============================================================
// void = function returns nothing useful (undefined)

function returnVoid(): void {
    console.log("No return value");
}

function logError(errmsg: string): void {
    console.error(errmsg);
}

const logInfo = (message: string): void => {
    console.log(`[INFO] ${message}`);
};

returnVoid();
logError("Something went wrong");
logInfo("Application started");

export { returnVoid, logError, logInfo };
