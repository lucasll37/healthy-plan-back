export class EmailAlreadyExistsError extends Error {
    public code = 400;

    constructor() {
        super("User already exists");
    }
}
