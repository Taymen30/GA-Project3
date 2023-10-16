const express = require("express");
const router = express.Router();
const Station = require("../models/station");

router.get("/all", (req, res) => {
  Station.findAll().then((stations) => res.json(stations));
});

module.exports = router;