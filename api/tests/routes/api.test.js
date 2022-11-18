const request = require("supertest");
const server = require("../../src/app");

describe("GET /diets", () => {
  it("should reply the GET method with status code 200", async () => {
    const response = await request(server).get("/diets");
    expect(response.statusCode).toBe(200);
  });

  it("should reply the GET method with a number of diets", async () => {
    const response = await request(server).get("/diets");
    expect(response.body.length).toBe(11);
  });
});
