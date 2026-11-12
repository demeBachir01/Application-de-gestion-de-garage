const { json } = require("body-parser");
const db = require("../models");
const garageModel = require("../models/garage.model");
const { Model } = require("sequelize");

const Garage=db.Garage;

function add(req,res){
    Garage.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).json({error:"Error lors de l'addition du Garage"})
    })
}
function get(req,res){
    Garage.findByPk(req.params.id)
    .then((data)=>{
        res,json(data);
    })
    .catch((error)=>{
        res.status(500).json({error:"Error lors de la recuperation du Garage"})
    });
}
const getAll = async (req, res) => {
    try {
      res.json(await Garage.findAll());
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la recuperation du Garage " });
    }
  }
async function updateGarage(req,res){
    try {
        const existingGarage = await Garage.findByPk(req.params.id);
        if(existingGarage){
            existingGarage.update(req.body);
            res.json({'message':"Garage mis a jour avec succes"})
        }
    } catch (error) {
        res.status(500).json({error:"Erreur lors de la mis a jour du Garage"});
    }
}
const deleteGarage = function (req, res) {
    Garage.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.json({ message: "Garage supprimer avec succes " });
      })
      .catch((error) => {
        res.status(500).json({ error: "Erreur lors de la suppression du Garage" });
      });
  }

  module.exports = {
    add,
    deleteGarage,
    get,
    getAll,
    updateGarage: updateGarage
  }