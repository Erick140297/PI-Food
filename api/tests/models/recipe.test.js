const { Recipe, Diet } = require("../../src/db.js");

describe("Recipe model", () => {
  describe("Validators", () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe("Valid data", () => {
      it("Should throw an error if the data is null", (done) => {
        Recipe.create({})
          .then(() => done(new Error("The data is incomplete")))
          .catch(() => done());
      });
      it("Should work when the data is valid", () => {
        Recipe.create({
          name: "Salad",
          image: "http://localhost:3001/uploads/default.jpeg",
          summary: "A delicious dish",
          healthScore: 100,
          steps: ["Step 1", "Step 2", "Step 3"],
          arrayDiets: [1, 2, 3],
        });
      });
    });
  });
});
