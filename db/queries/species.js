
const {db} = require("./index.js");

const getAllSpecies = (req, res, next) => {
  db.any('SELECT * FROM species')
  .then((species) => {
    res.status(200)
    .json({
      status: "successful",
      data: species,
      message: "These are all the species"
    });
  })
  .catch(err => {
     return next(err);
  })
}

const getSingleSpecies = (req, res, next) => {
  let getAllSpeciesID = parseInt(req.params.id);
  db.one('SELECT * FROM species WHERE id=$1', speciesID)
  .then(data => {
    res.status(200).json({
      status: "success",
      data: species,
      message: "Received speciesID"
    });
  })
  .catch(err => {
    return next(err);
  });
}

const addNewSpecies = (req, res, next) => {
  const species = req.body;
  db.none("INSERT INTO species(name, is_mammal) VALUES (${name}, ${is_mammal})", species)
  .then(() => {
    res.status(200)
    .json({
      status: "Sucessful",
      message: "Species added."
    })
  })
  .catch(err => {
    return next(err);
  });
}

module.exports = {
  getAllSpecies,
  getSingleSpecies,
  addNewSpecies
};
