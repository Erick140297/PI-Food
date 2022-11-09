const { Recipe, Diet } = require("../db");

const getRecipesFromDB = async () => {
  let recipesDB = await Recipe.findAll({
    include: [
      {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  let array = [];
  for (let i = 0; i < recipesDB.length; i++) {
    let diets = [];
    for (let j = 0; j < recipesDB[i].dataValues.diets.length; j++) {
      diets.push(recipesDB[i].dataValues.diets[j].dataValues.name)
    }
    let newRecipe = { ...recipesDB[i].dataValues, diets: diets}
    array.push(newRecipe);
  }
  return array
};

module.exports = getRecipesFromDB;
