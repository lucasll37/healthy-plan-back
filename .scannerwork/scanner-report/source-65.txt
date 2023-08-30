export class AthleteAndTrainerDontMeet extends Error {
    public code = 400;

    constructor() {
        super("Athlete And Trainer Don't Meet");
    }
}