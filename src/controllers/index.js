const {
  userRegister,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./users.controller");
const { userLogin } = require("./auth.controller.js");
const {
  getAllCharactersFromAPI,
  seedAllCharacters,
  heroNameStartsWith,
  getHeroById,
  getAllHeroesDataBase,
  updateHero,
  deleteHero,
  insertHero
} = require("./heroes.controller");

module.exports = {
  userRegister,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  userLogin,
  getAllCharactersFromAPI,
  seedAllCharacters,
  heroNameStartsWith,
  getHeroById,
  getAllHeroesDataBase,
  updateHero,
  deleteHero,
  insertHero
};
