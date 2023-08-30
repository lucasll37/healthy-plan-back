export class InvalidCredenctialsError extends Error {
    public code = 400;

    constructor() {
        super("Invalid Credentials Error");
    }
}