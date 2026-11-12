const { json } = require("body-parser");
const db = require("../models");
const { Model } = require("sequelize");

const Voiture=db.Voiture;

function add(req,res){
    Voiture.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).json({error:"Error lors de l'addition du Voiture"})
    })
}
function get(req,res){
    Voiture.findByPk(req.params.id)
    .then((data)=>{
        res,json(data);
    })
    .catch((error)=>{
        res.status(500).json({error:"Error lors de la recuperation du Voiture"})
    });
}
const getAll = async (req, res) => {
    try {
      res.json(await Voiture.findAll());
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la recuperation du Voiture " });
    }
  }
async function updateVoiture(req,res){
    try {
        const existingVoiture = await Voiture.findByPk(req.params.id);
        if(existingVoiture){
            existingVoiture.update(req.body);
            res.json({'message':"Voiture mis a jour avec succes"})
        }
    } catch (error) {
        res.status(500).json({error:"Erreur lors de la mis a jour du passeger"});
    }
}
const deleteVoiture = function (req, res) {
    Voiture.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.json({ message: "Voiture supprimer avec succes " });
      })
      .catch((error) => {
        res.status(500).json({ error: "Erreur lors de la suppression du Voiture" });
      });
  }

  module.exports = {
    add,
    deleteVoiture,
    get,
    getAll,
    updateVoiture
  }