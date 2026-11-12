const { json } = require("body-parser");
const db = require("../models");
const chauffeurModel = require("../models/chauffeur.model");
const { Model } = require("sequelize");

const Chauffeur=db.Chauffeur;

function add(req,res){
    Chauffeur.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).json({error:"Error lors de l'addition du Chauffeur"})
    })
}
function get(req,res){
    Chauffeur.findByPk(req.params.id)
    .then((data)=>{
        res,json(data);
    })
    .catch((error)=>{
        res.status(500).json({error:"Error lors de la recuperation du Chauffeur"})
    });
}
const getAll = async (req, res) => {
    try {
      res.json(await Chauffeur.findAll());
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la recuperation du Chauffeur " });
    }
  }
async function updateChauffeur(req,res){
    try {
        const existingChauffeur = await Chauffeur.findByPk(req.params.id);
        if(existingChauffeur){
            existingChauffeur.update(req.body);
            res.json({'message':"Voiture mis a jour avec succes"})
        }
    } catch (error) {
        res.status(500).json({error:"Erreur lors de la mis a jour du passeger"});
    }
}
const deleteChauffeur = function (req, res) {
    Chauffeur.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.json({ message: "Voiture supprimer avec succes " });
      })
      .catch((error) => {
        res.status(500).json({ error: "Erreur lors de la suppression du Chauffeur" });
      });
  }

  module.exports = {
    add,
    deleteChauffeur,
    get,
    getAll,
    updateChauffeur,
  }