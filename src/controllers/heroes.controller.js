const api = require("marvel-api");
require("dotenv").config();
const heroSchema = require("../models/hero.model");

let credentials = {
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
};

const marvel = api.createClient(credentials);

const seedAllCharacters = async (req, res) => {
  try {
    await marvel.characters.findAll(50, (err, result) => {
      if (err) {
        throw err;
      } else {
        let newListHero = [];
        result.data.map(async (hero) => {
          let heroNew = {
            idApi: hero.id,
            name: hero.name,
            description: hero.description ?? "N/a",
            image: `${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`,
            appears: hero.series.items,
          };
          newListHero.push(heroNew);

          const personaje = await heroSchema(heroNew);
          personaje
            .save()
            .then((data) => console.log(data))
            .catch((error) => console.log({ message: error }));
        });

        res.send(newListHero);
      }
    });
  } catch (error) {
    throw error;
  }
};

const insertHero = async( req, res)=> {
  const body = req.body;
  const {idApi, name, description, image, appears } = body
  let heroNew = {
    idApi,
    name,
    description,
    image,
    appears,
  };
  const personaje = await heroSchema(heroNew);
  personaje
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

}

const heroNameStartsWith = async (req, res) => {
  const { name } = req.params;
  console.log("Este es el log de name", name);
  try {
    await marvel.characters
      .findNameStartsWith(name)
      .then((data) => {
        let newListHero = [];
        data.data.map(async (hero) => {
          let heroNew = {
            idApi: hero.id,
            name: hero.name,
            description: hero.description ?? "N/a",
            image: `${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`,
            appears: hero.series.items,
          };
          newListHero.push(heroNew);
        });

        res.json(newListHero);
      })
      .fail((error) => res.json(error))
      .done();
  } catch (error) {
    throw error;
  }
};

const getHeroById = async (req, res) => {
  const { id } = req.params;
  heroSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const getAllHeroesDataBase = async (req, res) => {
  heroSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const updateHero = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  heroSchema
    .updateOne({ _id: id }, { $set: { description } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const deleteHero = async (req, res) => {
  const { id } = req.params;

  heroSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

module.exports = {
  seedAllCharacters,
  heroNameStartsWith,
  getAllHeroesDataBase,
  getHeroById,
  updateHero,
  deleteHero,
  insertHero
};
