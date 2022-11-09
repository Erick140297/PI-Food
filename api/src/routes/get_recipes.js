const { Router } = require("express");
const router = Router();

router.get("/recipes", (req, res) => {
  try {
    const { name } = req.query;
    if (name === undefined) {
      res.status(200).json("name = undefined");
    } else {
      res.status(200).json(name);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
