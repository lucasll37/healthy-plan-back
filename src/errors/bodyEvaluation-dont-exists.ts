export class BodyEvaluationDontExistsError extends Error {
    public code = 404;

    constructor() {
        super("Body Evaluation don't exists");
    }
}
