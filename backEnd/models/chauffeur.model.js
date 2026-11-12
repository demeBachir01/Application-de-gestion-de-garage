module.exports=function(sequelize,Sequelize){
    const Chauffeur=sequelize.define('chauffeur',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        numpermis:{
            type:Sequelize.INTEGER
        }
    },
    {timestamp:true});
    return Chauffeur; 
};