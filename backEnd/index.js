const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const PORT = 8082;
const app = express();

const corsOption = { origin: "http://localhost:4200" };
const bagageRoute=require("./controllers/bagage.controller")
const passagerRoute=require("./controllers/passager.controller")
const VoitureRoute=require("./controllers/voiture.controller");
const ChauffeurRoute=require("./controllers/chauffeur.controller");
const garageRoure=require("./controllers/garage.controller");
const DepartRoute=require("./controllers/depart.controller");
const RolesRoute=require("./controllers/roles.controller");
const UsersRoute=require("./controllers/users.controller");
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { verifyToken } = require("./middleware/jwtAuth");
//creation du table au niveau de la base de donnees
db.sequelize
  .sync({ alter: true })
  .then(function () {
    console.log("Les tables ont ete cree avec succes !");
  })
  .catch(function (error) {
    console.log("Oops erreur lors de la creation de la table",error);
  });
  // Les routes
  app.use("/api/user",verifyToken,UsersRoute);
  app.use("/api/chauffeur", verifyToken,ChauffeurRoute)
  app.use("/api/garage",verifyToken,garageRoure);
  app.use("/api/voitur",verifyToken,VoitureRoute);
  app.use("/api/depart", verifyToken,DepartRoute);
  app.use("/api/bagage", verifyToken,bagageRoute);
  app.use("/api/role",verifyToken,RolesRoute);
  app.use("/api/passager",verifyToken,passagerRoute)


//port d'ecoute
  app.listen(PORT, function () {
    console.log("Server a demarre sur le port " + PORT);
  });