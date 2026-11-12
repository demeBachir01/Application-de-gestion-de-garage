const { json } = require("body-parser");
const db = require("../models");
const bagageModel = require("../models/bagage.model");
const { Model } = require("sequelize");

const Bagage=db.Bagage;

function add(req,res){
    Bagage.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).json({error:"Error lors de l'addition du Bagage"})
    })
}
function get(req,res){
    Bagage.findByPk(req.params.id)
    .then((data)=>{
        res,json(data);
    })
    .catch((error)=>{
        res.status(500).json({error:"Error lors de la recuperation du Bagage"})
    });
}
const getAll = async (req, res) => {
    try {
      res.json(await Bagage.findAll());
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la recuperation du Bagage " });
    }
  }
async function updateBagage(req,res){
    try {
        const existingBagage = await Bagage.findByPk(req.params.id);
        if(existingBagage){
            existingBagage.update(req.body);
            res.json({'message':"Bagage mis a jour avec succes"})
        }
    } catch (error) {
        res.status(500).json({error:"Erreur lors de la mis a jour du Bagage"});
    }
}
const deleteBagage = function (req, res) {
    Bagage.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.json({ message: "Bagage supprimer avec succes " });
      })
      .catch((error) => {
        res.status(500).json({ error: "Erreur lors de la suppression du Bagage" });
      });
  }

  module.exports = {
    add,
    deleteBagage,
    get,
    getAll,
    updateBagage: updateBagage
  }