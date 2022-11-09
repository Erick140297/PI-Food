const axios = require("axios");
require("dotenv").config();
const { YOUR_API_KEY } = process.env;

const getRecipesFromApi = async () => {
  let recipesData = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
  );

  let recipes = [];

  recipesData.data.results.map((e) => {

    let diets = []

  if(e.vegetarian === true) {
    diets.push("vegetarian")
  }

  if(e.vegan === true) {
    diets.push("vegan")
  }

  if(e.glutenFree === true) {
    diets.push("gluten free")
  }

  if(e.dairyFree === true) {
    diets.push("dairy free")
  }

    const recipe = {
      id: e.id,
      image: e.image,
      name: e.title,
      dishTypes: e.dishTypes,
      diets: diets.concat(e.diets),
      summary: e.summary,
      healthScore: e.healthScore,
      // steps: e.analyzedInstructions[0]?.steps.map((e) => {
      //   return {
      //     number: e.number,
      //     step: e.step,
      //   };
      // }),
      steps: e.analyzedInstructions[0]?.steps.map((e) => {
        return e.step
      }),
    };
    recipes.push(recipe);
  });
  return recipes;
};

module.exports = getRecipesFromApi;
