
module.exports=function(sequelize,Sequelize){
    const Users=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nom:{
        type:Sequelize.STRING
    },
    prenom:{
        type:Sequelize.STRING
    },
    numtel:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    adresse:{
        type:Sequelize.STRING
    }
},{timestamp:true});
return Users; 
}