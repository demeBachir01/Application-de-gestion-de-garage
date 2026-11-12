module.exports=function(sequelize,Sequelize){
    const Bagage=sequelize.define('bagage',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        libelle:{
            type:Sequelize.STRING
        },
        quanite:{
            type:Sequelize.INTEGER
        }
    },{timestamp:true});
    return Bagage;
}