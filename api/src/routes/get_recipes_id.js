const { Router } = require("express");
const router = Router()

router.get("/recipes/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(id);
  } catch (error) {
    res.status(400).json(error.message);
  }
})

module.exports = router