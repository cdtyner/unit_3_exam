const {db} = require("./index.js");

const getAllTaggings = (req, res, next) => {
  db.any('SELECT * FROM taggings')
  .then((taggings) => {
    res.status(200)
    .json({
      status: "successful",
      data: taggings,
      message: "These are all the taggings."
    });
  })
  .catch(err => {
     return next(err);
  })
}

const getSingleTagging = (req, res, next) => {
  let taggingID = parseInt(req.params.id);
  db.one('SELECT * FROM taggings WHERE id=$1', [taggingID])
  .then(data => {
    res.status(200).json({
      status: "success",
      data: tagging,
      message: "Received taggingID"
    });
  })
  .catch(err => {
    return next(err);
  });

}

const getResearcherTaggings = (req, res, next) => {

}

const getAnimalTaggings = (req, res, next) => {

}

const addNewTagging = (req, res, next) => {
  const tagging = req.body;
  db.none ("INSERT INTO taggings(animal_id, researcher_id) VALUES (${animal_id}, ${researcher_id})", tagging)
  .then(() => {
    res.status(200)
    .json({
      status: "Sucessful",
      message: "Tagging added."
    })
  })
  .catch(err => {
    return next(err);
  });
}

module.exports = {
  getAllTaggings,
  getSingleTagging,
  getResearcherTaggings,
  getAnimalTaggings,
  addNewTagging
};
