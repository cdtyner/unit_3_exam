const {db} = require("./index.js");

const getAllAnimals = (req, res, next) => {
  db.any('SELECT * FROM animals')
  .then((animals) => {
    res.status(200)
    .json({
      status: "successful",
      data: animals,
      message: "These are all the animals!"
    });
  })
  .catch(err => {
     return next(err);
  })
}

const getSingleAnimal = (req, res, next) => {
  let animalID = parseInt(req.params.id);
  db.one('SELECT * FROM animals WHERE id=$1', animalID)
  .then(data => {
    res.status(200).json({
      status: "success",
      data: animal,
      message: "Received animalID"
    });
  })
  .catch(err => {
    return next(err);
  });
}

const addNewAnimal = (req, res, next) => {
  const animal = req.body;
  db.none("INSERT INTO animals(category) VALUES (${category})", animal)
  .then(() => {
    res.status(200)
    .json({
      status: "Sucessful",
      message: "Animal added."
    })
  })
  .catch(err => {
    return next(err);
  });
}

const updateSingleAnimal = (req, res, next) => {

}

const deleteAnimal = (req, res, next) => {
  let animalID = parseInt(req.params.id);
  db.result("DELETE FROM animals WHERE id=$1", animalID)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "Animal deleted",
      });
    })
  .catch(err => {
    return next(err);
  });
}

module.exports = {
  getAllAnimals,
  getSingleAnimal,
  addNewAnimal,
  updateSingleAnimal,
  deleteAnimal
};
