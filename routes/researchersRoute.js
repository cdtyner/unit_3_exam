//GET /researchers: Get all researchers.
//GET /researchers/:id: Get single researcher.
//POST /researchers: Add new researcher.
//PATCH /researchers/:id: Update single researcher.
//DELETE /researchers/:id: Delete single researcher.

const express = require("express");
const router = express.Router();

 const {
   getAllResearchers,
   getSingleResearcher,
   addNewResearcher,
   updateResearcher,
   deleteResearcher
 } = require("../db/queries/researchers.js");

 router.get("/", getAllResearchers);
 router.get("/:id", getSingleResearcher);
 router.post("/", addNewResearcher);
 router.patch("/id:", updateResearcher);
 router.delete("/id:", deleteResearcher);

module.exports = router;
