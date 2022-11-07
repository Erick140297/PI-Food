const { Router } = require("express");
const router = Router()

router.get("/diets", (req, res) => {
  try {
    res.status(200).json("Diets it's Ok");
  } catch (error) {
    res.status(400).json(error.message);
  }
})

module.exports = router