import express from "express";
import { MongoClient, ServerApiVersion } from 'mongodb';
const app = express();
const port = 4000;


const uri = "mongodb+srv://sandy:bw26vKuhJ3bwGOmU@fullstack-mern.ehft6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  console.log("connecté avec succès à la db")
  // const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get("/", (_, res) => {
    res.send("Hello Express !")
})

app.listen(port, () => {
    console.log("serveur démarré avec succès sur le port 4000")
})