module.exports=function(sequelize,Sequelize){
    const Passager=sequelize.define('passager',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        numcni:{
            type:Sequelize.INTEGER
        }
    },{timestamp:true});
    return Passager;
}