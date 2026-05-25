// ============================================================
// UNION TYPE ALIAS
// ============================================================

type StringOrNumber = string | number;

let value: StringOrNumber = 1;
value = "hello";

type Result = { success: true; data: string } | { success: false; error: string };

function handle(result: Result): void {
    if (result.success) {
        console.log(result.data);
    } else {
        console.error(result.error);
    }
}

handle({ success: true, data: "OK" });
handle({ success: false, error: "Failed" });

export { StringOrNumber, Result, value, handle };
