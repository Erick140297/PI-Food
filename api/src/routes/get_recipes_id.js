const { Router } = require("express");
const getRecipeById = require("../controllers/getRecipeById");
const router = Router()

router.get("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getRecipeById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
})

module.exports = router