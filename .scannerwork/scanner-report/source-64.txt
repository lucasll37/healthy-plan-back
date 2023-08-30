export class TrainerDontExistsError extends Error {
    public code = 400;

    constructor() {
        super("Trainer don't exists");
    }
}