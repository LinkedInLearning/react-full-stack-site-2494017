import express from "express";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';
const app = express();
const port = 4000;

app.use(express.json());
dotenv.config();

const uri = process.env.STRING_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get("/", (_, res) => {
  client.connect((err, db) => {
    console.log("connecté avec succès à la db")
    if (err || !db) { return false }
    db.db("blog").collection("posts").find().toArray( function (err, results) {
      if (!err) {
        res.status(200).send(results);
      }
    })
    // perform actions on the collection object
    // client.close();
  });
})

const obj = {title: "title", content: "content ..."};

app.post("/insert", (req, res) => {
  client.connect((err, db) => {
    console.log("connecté avec succès à la db")
    if (err || !db) { return false }
    db.db("blog").collection("posts").insertOne(req.body, function(err, results) {
      if(!err) {
        res.status(200).send(results);
      }
    })
  })
})
app.listen(port, () => {
    console.log("serveur démarré avec succès sur le port 4000")
})