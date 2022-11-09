const { Router } = require("express");
const router = Router();
const getRecipesFromApi = require("../controllers/getRecipesFromApi")

router.get("/recipes", async (req, res) => {
  try {
    const { name } = req.query;
    if (name === undefined) {
      const response = await getRecipesFromApi()
      res.status(200).json(response);
    } else {
      res.status(200).json(name);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
