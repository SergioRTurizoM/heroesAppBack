const mongoose = require("mongoose");

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Sergio
 *         email:
 *           type: string
 *           example: sergio@gmail.com
 *         password:
 *           type: string
 *           example: abc123
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Sergio
 *         email:
 *           type: string
 *           example: sergio@gmail.com
 *         password:
 *           type: string
 *           example: abc123
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */



const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
