const getRecipesFromApi = require("./getRecipesFromApi");
const getRecipesFromDB = require("./getRecipesFromDB");

const getRecipesAll = async () => {
  let recipesApi = await getRecipesFromApi();
  let recipesDB = await getRecipesFromDB();
  let result = recipesDB.concat(recipesApi);
  let recipes = [];
  result.forEach((e) => recipes.push({ ...e, name: e.name.toUpperCase() }));
  return recipes
};

module.exports = getRecipesAll;
