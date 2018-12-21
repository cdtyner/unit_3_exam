//GET /habitats: Get all habitats.
//GET /habitats/:id: Get single habitat.
//POST /habitats: Add new habitat.


const express = require("express");
const router = express.Router();

const {
   getAllHabitats,
   getSingleHabitat,
   addNewHabitat
} = require("../db/queries/habitats.js");

router.get("/", getAllHabitats);
router.get("/:id", getSingleHabitat);
router.post("/", addNewHabitat);

module.exports = router;
