// ============================================================
// LITERAL TYPES
// ============================================================

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
type Theme = "light" | "dark";

let roll: DiceRoll = 4;
let theme: Theme = "dark";

const API_URL = "https://api.example.com" as const;  // readonly literal

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
let method: HttpMethod = "GET";

export { DiceRoll, Theme, roll, theme, API_URL, HttpMethod, method };
