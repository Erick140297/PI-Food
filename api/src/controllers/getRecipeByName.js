const getRecipesAll = require("./getRecipesAll");

const getRecipeByName = async (name) => {
  const recipes = await getRecipesAll();
  let recipe = recipes.filter((e) => e.name === name);
  if(recipe.length === 0){
    throw new Error("No matches found")
  } else{
    return recipe[0]
  }
};

module.exports = getRecipeByName