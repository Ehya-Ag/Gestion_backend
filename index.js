import express from "express";
import router from "./src/routes/recetteRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
