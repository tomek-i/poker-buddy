const supertest = require("supertest");
const app = require("../../server");
const request = supertest(app);

describe("API Test Endpoint", () => {
  it("gets the test endpoint", async done => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
    done();
  });
});

describe("API User Endpoints", () => {
  it("GET /api/user/", async done => {
    const response = await request.get("/api/user");
    expect(response.status).toBe(200);
    expect(response.text).toBe("[]");
    //expect(response.body).toBe("pass!");
    done();
  });
});
