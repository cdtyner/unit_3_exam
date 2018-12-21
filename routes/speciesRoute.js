//GET /species: Get all species.
//GET /species/:id: Get single species.
//POST /species: Add new species.

const express = require("express");
const router = express.Router();


const {
  getAllSpecies,
  getSingleSpecies,
  addNewSpecies
} = require("../db/queries/species.js");

router.get("/", getAllSpecies);
router.get("/:id", getSingleSpecies);
router.post("/", addNewSpecies);

module.exports = router;
