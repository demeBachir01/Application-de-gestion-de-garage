const bodyParser=require("body-parser")
const express = require("express");
const db = require("../models");
const usersModel = require("../models/user.model");
const { Model, Op } = require("sequelize");
const Bcrypt = require("bcryptjs");
const auth = require("../middleware/jwtAuth");
const Users = db.Users;
const Roles = db.Roles;

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());
  
//crypter le mots de passe du user
function creerUsers(req, res) {
  const userWithCryptedPassword = {
    prenom:req.body.prenom,
    nom:req.body.nom,
    adresse:req.body.adresse,
    numtel:req.body.numtel,
    email: req.body.email,
    password: Bcrypt.hashSync(req.body.password),
  };
  Users.create(userWithCryptedPassword)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error when creating the User" });
    });
}

function getUsersById(req, res) {
  Users.findByPk(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error when getting user" });
    });
}
async function updateUsers(req, res) {
  try {
    const existingUsers = await Users.findByPk(req.params.id);
    if (existingUsers) {
      // existingPays= {id,...req.body};
      existingUsers.update(req.body);
      res.json({ message: "Pays update successfully !" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error when updating Pays" });
  }
}
const getAllUsers = async (req, res) => {
  try {
    res.json(await Users.findAll());
  } catch (error) {
    res.status(500).json({ error: "Error when getting all Pays" });
  }
};
const deleteUsers = function (req, res) {
  Users.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ message: "use deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error when deleting the user" });
    });
};
async function createUserWhithRoles(req, res) {
  try {
    const user = await Users.create({
      password: req.body.password,
      email: req.body.email,
    });
    const roles = await Roles.findAll({
      where: { nom: { [Op.or]: req.body.roles } },
    });
    console.log(roles);
    user.setRoles(roles);
    res.json({ message: "User created suucessfully !" });
  } catch (error) {
    res.json({ error: "error when creating the user" });
  }
}
function sign(req, res) {
  Users.findOne(
    { where: { email: req.body.email } },
     // { include: [{ model: db.Roles, as: "roles" }] }
  )
    .then((user) => {
      if (Bcrypt.compareSync(req.body.password, user.password)) {
        const payload = {
          userId: user.id,
          email: user.email,
          roles: user.roles,
        };
         const option = {
          expiresIn: "1h",
         }; //la duree de validite du token
      const token = auth.genarateToken(
         payload,
        process.env.SECRET_KEY,
          option
        );
       res.json({ token: token });
      }
        })
    .catch((error) => {
      console.log(error);
      res.status(401).json({ error: "Unauthorized user" });
    });
}

module.exports = {
  creerUsers,
  deleteUsers,
  getAllUsers,
  getUsersById,
  updateUsers,
  createUserWhithRoles,
  sign,
};
