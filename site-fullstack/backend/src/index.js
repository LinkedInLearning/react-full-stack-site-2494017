import express from "express";
import cors from "cors";
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
require("./routes")(app)

app.listen(port, () => {
    console.log("serveur démarré avec succès sur le port 4000")
})