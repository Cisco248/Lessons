// ============================================================
// FUNCTION RETURN TYPE: Promise<T>
// ============================================================

async function returnPromise(): Promise<string> {
    return "async result";
}

function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return Promise.resolve({ id, name: "Lahiru" });
}

async function loadData(): Promise<number[]> {
    const data = await Promise.resolve([1, 2, 3]);
    return data;
}

returnPromise().then(console.log);
fetchUser(1).then(console.log);
loadData().then(console.log);

export { returnPromise, fetchUser, loadData };
