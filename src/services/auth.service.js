const  userSchema  = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthServices {
  static async authenticate(credentials) {
    try {
        console.log(credentials);
      const { email, password } = credentials;
      const result = userSchema.findOne({email, password})
      console.log("Este es el result en auth service authenticate", result);
      return result
    } catch (error) {
      throw error;
    }
  }

  static genToken(data) {
    try {
      const token = jwt.sign(data, process.env.SECRET, {
        expiresIn: "2h",
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;