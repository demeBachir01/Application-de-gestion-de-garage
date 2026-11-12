const { json } = require("body-parser");
const db = require("../models");
const passagerModel = require("../models/passager.model");
const { Model } = require("sequelize");

const Passager=db.Passager;

function add(req,res){
    Passager.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).json({error:"Error lors de l'addition du passager"})
    })
}
function get(req,res){
    Passager.findByPk(req.params.id)
    .then((data)=>{
        res,json(data);
    })
    .catch((error)=>{
        res.status(500).json({error:"Error lors de la recuperation du passager"})
    });
}
const getAll = async (req, res) => {
    try {
      res.json(await Passager.findAll());
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la recuperation du passager " });
    }
  }
async function updatePassager(req,res){
    try {
        const existingPassager = await Passager.findByPk(req.params.id);
        if(existingPassager){
            existingPassager.update(req.body);
            res.json({'message':"passager mis a jour avec succes"})
        }
    } catch (error) {
        res.status(500).json({error:"Erreur lors de la mis a jour du passeger"});
    }
}
const deletePassager = function (req, res) {
    Passager.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.json({ message: "Passager supprimer avec succes " });
      })
      .catch((error) => {
        res.status(500).json({ error: "Erreur lors de la suppression du passager" });
      });
  }

  module.exports = {
    add,
    deletePassager,
    get,
    getAll,
    updatePassager
  }