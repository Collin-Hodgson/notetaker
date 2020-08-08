const fs = require("fs");
const path = require("path");
const dbJson = require("../db/db.json");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json();
  });

  app.post("/api/notes", function (req, res) {});

  app.delete("/api/notes", function (req, res) {});
};
