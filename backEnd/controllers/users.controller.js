const userService=require('../services/users.service');
const {creerUsers,sign,createUserWhithRoles,deleteUsers,getAllUsers,getUsersById,updateUsers}=require("../services/users.service");

const express=require("express");
const routes=express.Router();

routes.post("/create",creerUsers);
routes.post("/createUserWhithRoles",createUserWhithRoles);
routes.get("/all",getAllUsers);
routes.delete("/:id",deleteUsers);
routes.get("/:id",getUsersById);
routes.put("/:id",updateUsers);
routes.post("/signin",sign)
module.exports=routes;