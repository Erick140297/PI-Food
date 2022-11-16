const { Router } = require("express");
const router = Router();
// const getRecipesFromApi = require("../controllers/getRecipesFromApi")
// const getRecipesFromDB = require("../controllers/getRecipesFromDB")
const getRecipesAll = require("../controllers/getRecipesAll");
const getRecipeByName = require("../controllers/getRecipeByName");

router.get("/recipes", async (req, res) => {
  try {
    const { name } = req.query;
    if (name === undefined) {
      const response = await getRecipesAll();
      res.status(200).json(response);
    } else {
      const response = await getRecipeByName(name);
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

module.exports = router;
