export class AthleteDontExistsError extends Error {
    public code = 400;

    constructor() {
        super("Athlete don't exists");
    }
}