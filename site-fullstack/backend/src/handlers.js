import { client } from "./MongoClient"


const COLLECTION = "posts";

module.exports = {
    getPosts :(_, res) => {
      client(function(db) {
        db.collection(COLLECTION).find().toArray( function (err, results) {
          if (!err) {
            res.status(200).send(results);
          }
        })
      })
    }, 
    insertPost: (req, res) => {
      client(function(db) { 
        db.collection(COLLECTION).insertOne(req.body, function(err, results) {
          if(!err) {
            res.status(200).send(results);
          }
        })
    })
  }
}