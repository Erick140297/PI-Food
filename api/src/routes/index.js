const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const get_diets = require("./get_diets")
const get_recipes_id = require("./get_recipes_id")
const get_recipes = require("./get_recipes")
const post_recipes = require("./post_recipes")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", get_diets);
router.use("/", get_recipes_id);
router.use("/", get_recipes);
router.use("/", post_recipes);

module.exports = router;
