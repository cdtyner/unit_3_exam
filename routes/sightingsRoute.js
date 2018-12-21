//GET /sightings: Get all sightings.
//GET /sightings/species/:id: Get all sightings of a specific species.
//GET /sightings/researchers/:id: Get all sightings for a specific researcher.
//GET /sightings/habitats/:id: Get all sightings for a specific habitat.
//POST /sightings: Add new sighting.
//DELETE /sightings/:id: Delete single sighting.

const express = require("express");
const router = express.Router();

const {
  getAllSightings,
  getSpeciesSightings,
  getResearcherSightings,
  getHabitatSightings,
  addNewSighting,
  deleteSingleSighting
} = require("../db/queries/sightings.js");

router.get("/", getAllSightings);
router.get("/species/:id", getSpeciesSightings);
router.get("/researcers/:id", getResearcherSightings);
router.get("/habitats/:id", getHabitatSightings);
router.post("/", addNewSighting);
router.delete("/:id", deleteSingleSighting);

module.exports = router;
