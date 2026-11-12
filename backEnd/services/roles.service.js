const { json } = require("body-parser");
const db = require("../models");
const rolesModel = require("../models/roles.model");
const { Model } = require("sequelize");


const Roles = db.Roles;
function creerRoles(req, res) {
    Roles.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: "Error when creating the Roles" });
    });
}

function getRolesById(req, res) {
    Roles.findByPk(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error when getting Roles" });
    });
}
async function updateRoles(req, res) {
  try {
    const existingRoles =await Users.findByPk(req.params.id);
    if(existingRoles){
        // existingPays= {id,...req.body};
        existingRoles.update(req.body);
        res.json({'message':"Roles update successfully !"})
    }
  } catch (error) {   
       res.status(500).json({ error: "Error when updating Roles" });
}
}
const getAllRoles = async (req, res) => {
  try {
    res.json(await Roles.findAll());
  } catch (error) {
    res.status(500).json({ error: "Error when getting all Roles" });
  }
};
const deleteRoles = function (req, res) {
    Roles.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ message: "Roles deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error when deleting Roles" });
    });
};
module.exports = {
  creerRoles,
  deleteRoles,
  getAllRoles,
  getRolesById,
  updateRoles
};
