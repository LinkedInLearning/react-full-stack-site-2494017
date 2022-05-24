import express from "express";
const app = express();
const port = 4000;

app.use(express.json());
require("./routes")(app)

app.listen(port, () => {
    console.log("serveur démarré avec succès sur le port 4000")
})