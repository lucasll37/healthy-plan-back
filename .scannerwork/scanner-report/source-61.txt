export class ResourceNotFoundError extends Error {
    public code = 400;

    constructor() {
        super("Resource not found");
    }
}