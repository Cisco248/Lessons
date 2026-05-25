// ============================================================
// TUPLE TYPE ALIASES
// ============================================================

type Coordinate = [number, number];
type UserRecord = [string, number, boolean];
type HttpResponse = [number, string, ...string[]];

const origin: Coordinate = [0, 0];
const user: UserRecord = ["Lahiru", 25, true];
const response: HttpResponse = [200, "OK", "application/json"];

function move(point: Coordinate, dx: number, dy: number): Coordinate {
    return [point[0] + dx, point[1] + dy];
}

const moved = move(origin, 5, 10);

export { Coordinate, UserRecord, HttpResponse, origin, user, response, move, moved };
