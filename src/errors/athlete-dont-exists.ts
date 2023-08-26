export class AthleteDontExistsError extends Error {
    constructor() {
        super("Athlete don't exists");
    }
}