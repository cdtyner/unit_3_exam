const {db} = require("./index.js");

const getAllSightings = (req, res, next) => {
  db.any('SELECT * FROM sightings')
  .then((sightings) => {
    res.status(200)
    .json({
      status: "successful",
      data: sightings,
      message: "These are all the sightings."
    });
  })
  .catch(err => {
     return next(err);
  })

}

const getSpeciesSightings = (req, res, next) => {

}

const getResearcherSightings = (req, res, next) => {

}


const getHabitatSightings = (req, res, next) => {

}

const addNewSighting = (req, res, next) => {
    db.none("INSERT INTO sightings (sighting_id, body) VALUES (${id}, ${body})", req.body)
      .then(() => {
        res.status(200).json({
          status: "Success",
          message: "Sighting added"
        });
      })
      .catch(err =>  {
        return next(err);
     });
   }

const deleteSingleSighting = (req, res, next) => {
  let sightingID = parseInt(req.params.id);
  db.result("DELETE FROM sightings WHERE id=$1", sightingID)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "Sighting deleted",
      });
    })
  .catch(err => {
    return next(err);
  });
}

module.exports = {
  getAllSightings,
  getSpeciesSightings,
  getResearcherSightings,
  getHabitatSightings,
  addNewSighting,
  deleteSingleSighting
};
