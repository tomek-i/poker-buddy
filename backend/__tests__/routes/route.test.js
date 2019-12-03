const supertest = require("supertest");
const app = require("../../server");
const request = supertest(app);
const faker = require("faker");

const { setupDB } = require("../../jest-db-setup");
setupDB("create-api-testing");

async function helperCreateUser(total, done, customUser) {
  const results = [];
  for (let counter = 0; counter < total; counter++) {
    const user = {
      username: customUser ? customUser.username : faker.random.alphaNumeric(6),
      email: customUser ? customUser.email : faker.internet.email(),
      password: customUser ? customUser.password : faker.internet.password()
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

  it("PATCH /api/user/:id", async done => {
    expect("TODO").toBe(true);
    done();
  });
  it("DELETE /api/user/:id", async done => {
    expect("TODO").toBe(true);
    done();
  });

  it("GET /api/user/:id/games", async done => {
    expect("TODO").toBe(true);
    done();
  });

  it("GET /api/user/:username/games", async done => {
    expect("TODO").toBe(true);
    done();
  });

  it("GET /api/user/", async done => {
    const [user] = await helperCreateUser(3, done);
    const response = await request.get("/api/user");
    const [result] = response.body;

    expect(response.body.length).toBe(3);
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
      expect(result._id).toBe(_id);

      done();
    } catch (error) {
      done(error);
    }
  });

  it("GET /api/user/:username", async done => {
    const [user] = await helperCreateUser(1, done);
    const { _id, username } = user;
    try {
      const response = await request.get("/api/user/" + username);
      const result = response.body;

      expect(response.status).toBe(200);
      expect(result.password).toBeUndefined();
      expect(result.username).toBe(user.username);
      expect(result.email).toBe(user.email);
      expect(result._id).toBeDefined();
      expect(result._id).toBe(_id);

      done();
    } catch (error) {
      done(error);
    }
  });

  describe("API Auth Endpoint", () => {
    it("POST /login", async done => {
      const customUser = {
        username: "tomek",
        password: "qwerty",
        email: "example@example.com"
      };
      const [user] = await helperCreateUser(1, done, customUser);
      const response = await request
        .post("/login")
        .send({ username: customUser.username, password: customUser.password });
      expect(response.status).toBe(302);
      expect(response).toBe("pass!");
      expect(response.headers.token).toBe("pass!");
      expect(response.cookies.token).toBe("pass!");
      done();
    });
  });
});
