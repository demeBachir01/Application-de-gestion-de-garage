module.exports=function(sequelize,Sequelize){
    const Voiture=sequelize.define('voiture',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        typeDeVoiture:{
            type:Sequelize.STRING
        }
    },{timestamp:true});
    return Voiture;
}