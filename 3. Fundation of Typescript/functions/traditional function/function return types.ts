/**
 * Returns a boolean if value > 5, otherwise returns a status string
 *
 * @param myVal - A numeric input
 * @returns true if input is greater than 5, else returns "200 OK"
 */
function getValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
