const { Router } = require("express");
const router = Router();
const getDiets = require("../controllers/getDiets")

router.get("/diets", async (req, res) => {
  try {
   const response = await getDiets()
   res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
