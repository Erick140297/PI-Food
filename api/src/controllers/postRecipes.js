const { Recipe } = require("../db");

const postRecipe = async (name, image, summary, healthScore, steps, arrayDiets) => {
  const newRecipe = await Recipe.create({
    name,
    image,
    summary,
    healthScore,
    steps,
  });

  id = newRecipe.id;
  let recipe = await Recipe.findByPk(id);
  let dataDiets = await recipe.addDiets(arrayDiets);
  let diets = [];
  dataDiets.forEach((e) => diets.push(e.dietId));
  recipe = { ...recipe.dataValues, diets: diets };

  return recipe;
};

module.exports = postRecipe;
