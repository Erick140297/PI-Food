const axios = require("axios");
require("dotenv").config();
const { YOUR_API_KEY } = process.env;

const getRecipesFromApi = async () => {
  let recipesData = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
  );

  let recipes = [];

  recipesData.data.results.map((e) => {

    let dietsDefault = []
    let diets = []

  if(e.vegetarian === true) {
    dietsDefault.push("vegetarian")
  }

  if(e.vegan === true) {
    dietsDefault.push("vegan")
  }

  if(e.glutenFree === true) {
    dietsDefault.push("gluten free")
  }

  if(e.dairyFree === true) {
    dietsDefault.push("dairy free")
  }

  let repetDiets = dietsDefault.concat(e.diets)
  let setDiets = new Set(repetDiets);

  diets = [...setDiets]

    const recipe = {
      id: e.id,
      image: e.image,
      name: e.title,
      dishTypes: e.dishTypes,
      diets: diets,
      summary: e.summary,
      healthScore: e.healthScore,
      steps: e.analyzedInstructions[0]?.steps.map((e) => {
        return e.step
      }),
    };
    recipes.push(recipe);
  });
  return recipes;
};

module.exports = getRecipesFromApi;
