const getRecipesAll = require("./getRecipesAll");

const getRecipeById = async (id) => {
  const recipes = await getRecipesAll();
  let recipe = recipes.filter((e) => e.id === id);
  if(recipe.length === 0){
    throw new Error("No matches found")
  } else{
    return recipe[0]
  }
};

module.exports = getRecipeById