var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json();
  });

  app.post("/api/notes", function (req, res) {});

  app.delete("/api/notes", function (req, res) {});
};
