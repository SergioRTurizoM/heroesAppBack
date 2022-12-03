const { Router } = require("express");
const {
  userRegister,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require("../controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", userRegister);
router.get("/users", authenticate,getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
