export class AthleteDontExistsError extends Error {
    public code = 404;

    constructor() {
        super("Athlete don't exists");
    }
}
