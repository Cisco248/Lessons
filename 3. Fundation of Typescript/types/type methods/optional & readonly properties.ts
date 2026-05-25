// ============================================================
// OPTIONAL & READONLY ON TYPE ALIASES
// ============================================================

type Config = {
    readonly apiUrl: string;
    timeout: number;
    retries?: number;
    debug?: boolean;
};

const config: Config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
};

// config.apiUrl = "other";  // Error: readonly
config.timeout = 3000;
config.debug = true;

export { Config, config };
