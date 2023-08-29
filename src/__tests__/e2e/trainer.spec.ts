import request from "supertest";
import { app } from "../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Trainer (e2e)", () => {

    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });

    it("Should create a new trainer", async () => {
        const response = await request(app.server)
            .post("/v1/trainer")
            // .set('Authorization', `Bearer ${token}`)
            .send({
                // Continua!!!
            });

        expect(response.status).toBe(400);
        // expect(response.body.user).toEqual(expect.objectContaining({email: 'teste@gvdf'}));
    });
});
