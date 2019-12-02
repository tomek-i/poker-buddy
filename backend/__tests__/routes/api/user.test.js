const supertest = require("supertest");
const app = require("../../../server");
const request = supertest(app);

describe("API User Endpoints", () => {
  it("GET /api/user/", async () => {
    const response = await request.get("/api/user");
    expect(response.status).toBe(200);
    expect(response.text).toBe("user index");
    //expect(response.body).toBe("pass!");
  });
});
