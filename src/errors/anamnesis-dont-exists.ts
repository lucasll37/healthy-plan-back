export class AnamnesisDontExistsError extends Error {
    public code = 404;

    constructor() {
        super("Anamnesis don't exists");
    }
}
