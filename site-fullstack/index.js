import express from "express";
const app = express();
const port = 4000;

app.get("/", (_, res) => {
    res.send("Hello Express !")
})

app.listen(port, () => {
    console.log("serveur démarré avec succès sur le port 4000")
})