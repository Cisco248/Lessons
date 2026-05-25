// ============================================================
// OPTIONAL TUPLE ELEMENTS
// ============================================================

type Response = [number, string?, boolean?];

const success: Response = [200, "OK", true];
const minimal: Response = [204];

function parseResponse(res: Response): void {
    const [code, message = "No message", ok = false] = res;
    console.log(code, message, ok);
}

parseResponse(success);
parseResponse(minimal);

export { Response, success, minimal, parseResponse };
