const {db} = require("./index.js");

const getAllResearchers = (req, res, next) => {
  db.any('SELECT * FROM researchers')
  .then((researchers) => {
    res.status(200)
    .json({
      status: "successful",
      data: researchers,
      message: "These are all the researchers"
    });
  })
  .catch(err => {
     return next(err);
  })
}
const getSingleResearcher = (req, res, next) => {
  let researcherID = parseInt(req.params.id);
  db.one('SELECT * FROM researchers WHERE id=$1', researcherID)
  .then(data => {
    res.status(200).json({
      status: "success",
      data: researcher,
      message: "Received researcherID"
    });
  })
  .catch(err => {
    return next(err);
  });
};

const addNewResearcher = (req, res, next) => {
  const researcher = req.body;
  db.none("INSERT INTO researchers(name, job_title) VALUES (${name}, ${job_title})", researcher)
  .then(() => {
    res.status(200)
    .json({
      status: "Sucessful",
      message: "Researcher added"
    });
  })
  .catch(err => {
    return next(err);
  });
};

const updateResearcher = (req, res, next)=> {
  next()
}

const deleteResearcher = (req, res, next) => {
  let researcherID = parseInt(req.params.id);
  db.result("DELETE FROM researchers WHERE id=$1", researcherID)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "Researcher deleted",
      });
    })
  .catch(err => {
    return next(err);
  });
};


module.exports = {
  getAllResearchers,
  getSingleResearcher,
  addNewResearcher,
  updateResearcher,
  deleteResearcher
};


/////////////////
