const axios = require("axios");
require('dotenv').config();
const { YOUR_API_KEY } = process.env;

const getRecipesByApi = async () => {
  let recipesData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)

  let recipes = []

  
}

module.exports = getRecipesByApi