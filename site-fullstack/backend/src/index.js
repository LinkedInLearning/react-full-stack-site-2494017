import express from "express";
import cors from "cors";
const app = express();
const routes = express.Router()
const port = 4000;

app.use(cors());
app.use(express.json());
app.use("/posts", routes);
require("./routes")(routes)

app.listen(port, () => {
    console.log("serveur démarré avec succès sur le port 4000")
})