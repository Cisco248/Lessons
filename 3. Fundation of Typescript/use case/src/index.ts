// ============================================================
// USE CASE — String, Number, Boolean in the Browser
// ============================================================

const Title = document.querySelector("h1")!;
Title.style.color = "#0066ff";

const Subtitles = document.querySelectorAll("h3");

// --- String demo ---
const name: string = "Lahiru Dilshan";
const greeting: string = `Hello, ${name}`;

// --- Number demo ---
const age: number = 25;
const nextYear: number = age + 1;

// --- Boolean demo ---
const isStudent: boolean = true;
const canAccess: boolean = isStudent && age >= 18;

Subtitles.forEach((subtitle, index) => {
    subtitle.style.color = "white";

    if (index === 0) {
        subtitle.textContent = `String: ${greeting}`;
    } else if (index === 1) {
        subtitle.textContent = `Number: Age ${age}, Next year: ${nextYear}`;
    } else if (index === 2) {
        subtitle.textContent = `Boolean: Student=${isStudent}, Access=${canAccess}`;
    }
});

export { name, greeting, age, nextYear, isStudent, canAccess };
