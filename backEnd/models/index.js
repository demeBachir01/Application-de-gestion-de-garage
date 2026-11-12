const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql", //postgres ou sqlite sqlserver
  }
);
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Chauffeur = require("./chauffeur.model")(sequelize,Sequelize);
db.Garage = require("./garage.model")(sequelize,Sequelize);
db.Passager = require("./passager.model")(sequelize,Sequelize);
db.Depart = require("./depart.model")(sequelize,Sequelize);
db.Voiture = require("./Voiture.model")(sequelize,Sequelize);
db.Bagage = require("./bagage.model")(sequelize,Sequelize);
db.Users = require("./user.model")(sequelize, Sequelize);
db.Roles = require("./roles.model")(sequelize, Sequelize);

//Relation Garage et Voiture
db.Garage.hasMany(db.Voiture,{foreignKey: "garageId", as: "garage"});
db.Voiture.belongsTo(db.Garage, {foreignKey: "garageId", as : "voiture"});

//Relation Bagage et passager
db.Passager.hasMany(db.Bagage, {foreignKey: "passagerId", as: "bagage"});
db.Bagage.belongsTo(db.Passager, {foreignKey: "passagerId", as: "passager"});

//Relation d'association entre voiture et passager (Depart)
db.Voiture.belongsToMany(db.Passager, {through: "depart"});
db.Passager.belongsToMany(db.Voiture, {through: "depart"});

//Autre methode oubien ont les combines
// db.Voiture.hasMany(db.Depart, {foreignKey: "departId", as: "depart"});
// db.Depart.belongsTo(db.Voiture, {foreignKey: "departId", as: "depart"});
// db.Passager.hasMany(db.Depart, {foreignKey: "departId", as: "depart"});
// db.Depart.belongsTo(db.Passager,{foreignKey: "departId", as: "depart"});

//Relation entre voiture et chauffeur
db.Voiture.hasOne(db.Chauffeur);
db.Voiture.belongsTo(db.Chauffeur, {foreignKey:{name:"chauffeurId"}})
db.Users.belongsToMany(db.Roles,{through:"users_roles", foreignKey:'users_id'});
db.Roles.belongsToMany(db.Users, {through:"users_roles", foreignKey:'roles_id'});
//relation entre user et chauffeur
db.Users.hasOne(db.Chauffeur);

//relation entre user et passager
db.Users.hasOne(db.Passager);

module.exports = db;