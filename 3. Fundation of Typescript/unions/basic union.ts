// ============================================================
// BASIC UNION TYPES
// ============================================================

let score_1: string | boolean = "Passed";
let score_2: boolean | number = 85;
let score_3: number | string = "80%";
let score_4: string | boolean | number = "A+";

score_1 = false;
score_2 = true;
score_3 = 80;
score_4 = 95;

export { score_1, score_2, score_3, score_4 };
