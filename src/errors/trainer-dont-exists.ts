export class TrainerDontExistsError extends Error {
    public code = 404;

    constructor() {
        super("Trainer don't exists");
    }
}
