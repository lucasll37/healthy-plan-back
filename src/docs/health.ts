export const healthDoc = {
    schema: {
        description: "Checks API state and integration with key services",
        tags: ["Check API health"],
        summary: "Checks API state and integration with key services",
        response: {
            200: {
                description: "Successful response.",
                type: "object",
                properties: {
                    token: { type: "string"},
                    server: { type: "string"},
                    cache: { type: "string"},
                    database: { type: "string"},
                    env: { type: "string"},
                    host: { type: "string"},
                    port: { type: "string"}
                }
            },
            500: {
                description: "testestsetse",
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            }
        }
    }
};
