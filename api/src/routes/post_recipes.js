const { Router } = require("express");
const router = Router();
const postRecipe = require("../controllers/postRecipes")

router.post("/recipes", async (req, res) => {
  try {
    const { name, image, summary, healthScore, steps, arrayDiets } = req.body;
    
    const response = await postRecipe(name,image, summary, healthScore, steps, arrayDiets)

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
