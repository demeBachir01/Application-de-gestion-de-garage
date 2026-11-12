const roleService=require('../services/roles.service');
const {creerRoles,deleteRoles,getAllRoles,getRolesById,updateRoles}=require("../services/roles.service");

const express=require("express");
const routes=express.Router();

routes.post("/create",creerRoles);
routes.get("/all",getAllRoles);
routes.delete("/:id",deleteRoles);
routes.get("/:id",getRolesById);
routes.put("/:id",updateRoles)
module.exports=routes;