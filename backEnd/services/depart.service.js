const { json } = require("body-parser");
const db = require("../models");
const departModel = require("../models/depart.model");
const { Model } = require("sequelize");

const Depart=db.Depart;

function add(req,res){
    Depart.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).json({error:"Error lors de l'addition du Depart"})
    })
}
function get(req,res){
    Depart.findByPk(req.params.id)
    .then((data)=>{
        res,json(data);
    })
    .catch((error)=>{
        res.status(500).json({error:"Error lors de la recuperation du Depart"})
    });
}
const getAll = async (req, res) => {
    try {
      res.json(await Depart.findAll());
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la recuperation du Depart " });
    }
  }
async function updateDepart(req,res){
    try {
        const existingDepart = await Depart.findByPk(req.params.id);
        if(existingDepart){
            existingDepart.update(req.body);
            res.json({'message':"Depart mis a jour avec succes"})
        }
    } catch (error) {
        res.status(500).json({error:"Erreur lors de la mis a jour du Depart"});
    }
}
const deleteDepart = function (req, res) {
    Depart.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.json({ message: "Depart supprimer avec succes " });
      })
      .catch((error) => {
        res.status(500).json({ error: "Erreur lors de la suppression du Depart" });
      });
  }

  module.exports = {
    add,
    deleteDepart,
    get,
    getAll,
    updateDepart: updateDepart
  }