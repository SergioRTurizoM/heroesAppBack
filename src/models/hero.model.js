const mongoose = require("mongoose");

const heroSchema = mongoose.Schema({
  idApi: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  appears: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("Hero", heroSchema);
