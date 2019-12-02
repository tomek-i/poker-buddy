const supertest = require("supertest");
const app = require("../../server");
const request = supertest(app);

describe("API Test Endpoint", () => {
  it("gets the test endpoint", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
  });
});
