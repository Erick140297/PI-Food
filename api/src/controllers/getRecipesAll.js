const getRecipesFromApi = require("./getRecipesFromApi");
const getRecipesFromDB = require("./getRecipesFromDB");

const getRecipesAll = async () => {
  let recipesApi = await getRecipesFromApi();
  let recipesDB = await getRecipesFromDB();
  let recipes = recipesDB.concat(recipesApi);
  return recipes
};

module.exports = getRecipesAll
