const { Router } = require("express");
const router = Router()

router.get("/recipes", (req, res) => {
  try {
    const { name } = req.query;
    res.status(200).json(name);
  } catch (error) {
    res.status(400).json(error.message);
  }
})

module.exports = router