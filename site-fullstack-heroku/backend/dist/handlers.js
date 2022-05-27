"use strict";

var _MongoClient = require("./MongoClient");

var COLLECTION = "posts";
module.exports = {
  getPosts: function getPosts(_, res) {
    (0, _MongoClient.client)(function (db) {
      db.collection(COLLECTION).find().toArray(function (err, results) {
        if (!err) {
          res.status(200).send(results);
        }
      });
    });
  },
  insertPost: function insertPost(req, res) {
    (0, _MongoClient.client)(function (db) {
      db.collection(COLLECTION).insertOne(req.body).then(function () {
        return db.collection(COLLECTION).find().toArray();
      }).then(function (records) {
        return res.status(200).send(records);
      })["catch"](function () {
        return res.status(400).send("Error fetching document from ".concat(COLLECTION));
      });
    });
  }
};