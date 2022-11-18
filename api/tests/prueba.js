const { Recipe, conn } = require("../src/db.js");

const prueba = async () => {
  conn.sync({ force: true }).then(async () => {
    const newRecipe = await Recipe.create({
      name: "Calabacitas",
      image: "http://localhost:3001/uploads/default.jpeg",
      summary: "Un plato delicioso",
      healthScore: 100,
      steps: ["paso 1", "paso 2", "paso 3"],
      arrayDiets: [1, 2, 3],
    });
    return newRecipe;
  });
};

console.log(prueba());
