const {
  userRegister,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require("./users.controller");

const {userLogin} = require('./auth.controller.js')

module.exports = {
  userRegister,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  userLogin
};
