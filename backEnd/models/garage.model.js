module.exports=function(sequelize,Sequelize){
    const Garage=sequelize.define('garage',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        nom:{
            type:Sequelize.STRING
        }
    },{timestamp:true})
    return Garage;
}