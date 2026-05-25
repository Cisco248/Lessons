// ============================================================
// FUNCTION RETURN TYPE: string
// ============================================================

function returnString(): string {
    return "hello";
}

const arrowReturnString = (): string => "world";

function formatName(first: string, last: string): string {
    return `${first} ${last}`;
}

const msg = returnString();
const arrowMsg = arrowReturnString();
const fullName = formatName("John", "Doe");

export { returnString, arrowReturnString, formatName, msg, arrowMsg, fullName };
