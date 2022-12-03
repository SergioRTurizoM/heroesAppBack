const {
  userRegister,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./users.controller");
const { userLogin } = require("./auth.controller.js");
const {
  seedAllCharacters,
  heroNameStartsWith,
  getHeroById,
  getAllHeroesDataBase,
  updateHero,
  deleteHero
} = require("./heroes.controller");

module.exports = {
  userRegister,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  userLogin,
  seedAllCharacters,
  heroNameStartsWith,
  getHeroById,
  getAllHeroesDataBase,
  updateHero,
  deleteHero
};
