const getRecipesAll = require("./getRecipesAll");

const getRecipeById = async (id) => {
  const recipes = await getRecipesAll();
  let recipe = recipes.filter((e) => e.id === id);
  return recipe[0]
};

module.exports = getRecipeById