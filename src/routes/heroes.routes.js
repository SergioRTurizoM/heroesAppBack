const { Router } = require("express");
const router = Router();
const {getAllCharactersFromAPI,seedAllCharacters, heroNameStartsWith, getHeroById, getAllHeroesDataBase, updateHero, deleteHero, insertHero} = require('../controllers')

router.get('/characters/marvel', getAllCharactersFromAPI)
router.get('/characters/database/seed', seedAllCharacters)
router.post('/characters/database', insertHero)
router.get('/characters/database/:name', heroNameStartsWith)
router.put('/characters/database/:id', updateHero)
router.delete('/characters/database/:id', deleteHero)
router.get('/characters/:id', getHeroById)
router.get('/characters', getAllHeroesDataBase)


module.exports = router