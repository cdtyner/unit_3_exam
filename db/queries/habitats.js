const {db} = require("./index.js");

const getAllHabitats = (req, res, next) => {
  db.any('SELECT * FROM habitats')
  .then((habitats) => {
    res.status(200)
    .json({
      status: "successful",
      data: habitats,
      message: "These are all the habitats!"
    });
  })
  .catch(err => {
     return next(err);
  })
}

const getSingleHabitat = (req, res, next) => {
  let habitatID = parseInt(req.params.id);
  db.one('SELECT * FROM habitats WHERE id=$1', habitatID)
  .then(data => {
    res.status(200).json({
      status: "success",
      data: habitat,
      message: "Received habitat"
    });
  })
  .catch(err => {
    return next(err);
  });
}

const addNewHabitat = (req, res, next) => {
  const habitat = req.body;
  db.none ("INSERT INTO habitats(category) VALUES (${category})", habitat)
  .then(() => {
    res.status(200)
    .json({
      status: "Sucessful",
      message: "Habitat added."
    })
  })
  .catch(err => {
    return next(err);
  });
}

module.exports = {
  getAllHabitats,
  getSingleHabitat,
  addNewHabitat
};
