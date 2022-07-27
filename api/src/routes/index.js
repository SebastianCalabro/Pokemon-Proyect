const { Router } = require('express');
const pokemonsRoute = require("./pokemons.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", pokemonsRoute)

module.exports = router;
