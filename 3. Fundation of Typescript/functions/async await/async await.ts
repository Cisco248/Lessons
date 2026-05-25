// ============================================================
// ASYNC / AWAIT
// ============================================================

async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data loaded"), 500);
    });
}

async function loadUser(id: number): Promise<{ id: number; name: string }> {
    const response = await Promise.resolve({ id, name: "Lahiru" });
    return response;
}

async function runSequence(): Promise<void> {
    const data = await fetchData();
    console.log(data);

    const user = await loadUser(1);
    console.log(user.name);
}

// Error handling with try/catch
async function safeFetch(): Promise<string> {
    try {
        const result = await fetchData();
        return result;
    } catch (error) {
        return "Failed to load";
    }
}

runSequence();
safeFetch().then(console.log);

export { fetchData, loadUser, runSequence, safeFetch };
