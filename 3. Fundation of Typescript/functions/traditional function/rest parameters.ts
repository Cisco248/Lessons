// ============================================================
// REST PARAMETERS (...args)
// ============================================================

// Collect remaining arguments into an array
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

function joinWords(separator: string, ...words: string[]): string {
    return words.join(separator);
}

// Rest must be last parameter
function log(level: string, ...messages: string[]): void {
    messages.forEach((msg) => console.log(`[${level}] ${msg}`));
}

const total = sum(1, 2, 3, 4, 5);              // 15
const sentence = joinWords("-", "Type", "Script"); // "Type-Script"

log("INFO", "Server started", "Port 3000");

export { sum, joinWords, log, total, sentence };
