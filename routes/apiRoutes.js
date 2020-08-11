const fs = require("fs");
const path = require("path");
let dbJson = require("../db/db.json");
let json = path.join(__dirname, "../db/db.json");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(dbJson);
  });

  app.post("/api/notes", function (req, res) {
    dbJson = JSON.parse(fs.readFileSync(json, "utf-8"));
    var note = {
      title: req.body.title,
      text: req.body.text,
    };
    note.id = Math.floor(Math.random() * Date.now());
  });

  app.delete("/api/notes", function (req, res) {
    dbJson = JSON.parse(fs.readFileSync(json, "utf-8"));
    let id = req.params.id;
  });
};
