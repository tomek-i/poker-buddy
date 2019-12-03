const supertest = require("supertest");
const app = require("../../server");
const request = supertest(app);
const faker = require("faker");

const { setupDB } = require("../../jest-db-setup");
setupDB("create-api-testing");

async function helperCreateUser(total, done) {
  const results = [];
  for (let counter = 0; counter < total; counter++) {
    const user = {
      username: faker.random.alphaNumeric(6),
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    try {
      const res = await request.post("/api/user/create").send(user);
      results.push(res.body);
    } catch (error) {
      done(error);
      return null;
    }
  }
  return results;
}

describe("API Test Endpoint", () => {
  it("gets the test endpoint", async done => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
    done();
  });
});

describe("API User Endpoints", () => {
  it("POST /api/user/create", async done => {
    const user = {
      username: "tomek",
      email: "tom@example.com",
      password: "qwerty"
    };
    request
      .post("/api/user/create")
      .send(user)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end(function(err, res) {
        expect(res.body.username).toBe(user.username);
        expect(res.body.email).toBe(user.email);
        expect(res.body.password).not.toBe(user.password);
        expect(res.body.password).toBeTruthy();
        expect(res.body._id).toBeDefined();
        if (err) return done(err);
        done();
      });
  });

  it("GET /api/user/", async done => {
    const [user] = await helperCreateUser(1, done);
    const response = await request.get("/api/user");
    const [result] = response.body;

    expect(response.body.length).toBe(1);
    expect(response.status).toBe(200);
    expect(result.password).toBeUndefined();
    expect(result.username).toBe(user.username);
    expect(result.email).toBe(user.email);
    expect(result._id).toBeDefined();

    done();
  });

  it("GET /api/user/:id", async done => {
    const [user] = await helperCreateUser(1, done);
    const { _id } = user;
    try {
      const response = await request.get("/api/user/" + _id);
      const result = response.body;

      expect(response.status).toBe(200);
      expect(result.password).toBeUndefined();
      expect(result.username).toBe(user.username);
      expect(result.email).toBe(user.email);
      expect(result._id).toBeDefined();

      done();
    } catch (error) {
      done(error);
    }
  });
});
