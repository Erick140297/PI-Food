const { Router } = require("express");
const router = Router();

router.post("/recipes", (req, res)=> {
  try {
    const { name } = req.body
    res.status(200).send(name);
  } catch (error) {
    res.status(400).json(error.message);
  }
})

module.exports = router;