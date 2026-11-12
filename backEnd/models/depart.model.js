module.exports=function(sequelize,Sequelize){
    const Depart=sequelize.define('depart',{
        dateDepart:{
            type:Sequelize.DATE
        },
        heureDepart:{
            type:Sequelize.STRING
        },
        destination:{
            type:Sequelize.STRING
        }
    },{timestamp:true});
    return Depart;
}