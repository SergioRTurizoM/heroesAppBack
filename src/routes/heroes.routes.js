const { Router } = require("express");
const router = Router();
const {seedAllCharacters, heroNameStartsWith, getHeroById, getAllHeroesDataBase, updateHero, deleteHero} = require('../controllers')

router.get('/characters/database/seed', seedAllCharacters)
router.get('/characters/database/:name', heroNameStartsWith)
router.put('/characters/database/:id', updateHero)
router.delete('/characters/database/:id', deleteHero)
router.get('/characters/:id', getHeroById)
router.get('/characters', getAllHeroesDataBase)


module.exports = router