const voitureService=require("../services/voiture.service");
const {add,updateVoiture, get, getAll,deleteVoiture}=require("../services/voiture.service");

const express=require("express");
const routes=express.Router();

routes.post("/add",add);
routes.get("/getAll",getAll);
routes.delete("/delete/:id",deleteVoiture);
routes.get("/:id",get);
routes.put("/:id",updateVoiture)
module.exports=routes;