const userSchema = require("../models/users.model");

const userRegister = async (req, res, next) => {
  const user = await userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const getAllUsers = async (req, res, next) => {
  await userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  console.log("Este es el id del usuario en DB", id);
  await userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  await userSchema
    .updateOne({ _id: id }, { $set: { username, email, password } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const deleteUser = async (req, res, next) => {
    const { id } = req.params;

    await userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

module.exports = { userRegister, getAllUsers, getUserById, updateUser, deleteUser };
