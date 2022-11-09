const getRecipesAll = require("./getRecipesAll");

const getRecipeByName = async (name) => {
  const recipes = await getRecipesAll();
  let recipe = recipes.filter((e) => e.name === name);
  return recipe
};

module.exports = getRecipeByName