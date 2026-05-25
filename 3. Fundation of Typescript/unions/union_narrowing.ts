// ============================================================
// TYPE NARROWING WITH UNIONS
// ============================================================

function displayScore(score: string | number): void {
    if (typeof score === "string") {
        console.log("Text:", score.toUpperCase());
    } else {
        console.log("Number:", score.toFixed(1));
    }
}

function printId(id: string | number): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(0));
    }
}

displayScore("eighty-five");
displayScore(85);
printId("abc101");
printId(101);

export { displayScore, printId };
