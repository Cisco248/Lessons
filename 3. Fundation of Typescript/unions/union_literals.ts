// ============================================================
// LITERAL UNION TYPES
// ============================================================

type Direction = "north" | "south" | "east" | "west";
type Status = "pending" | "active" | "completed";

let heading: Direction = "north";
let orderStatus: Status = "pending";

function setDirection(dir: Direction): void {
    heading = dir;
}

function isComplete(status: Status): boolean {
    return status === "completed";
}

setDirection("east");
const done = isComplete("completed");

export { Direction, Status, heading, orderStatus, setDirection, isComplete, done };
