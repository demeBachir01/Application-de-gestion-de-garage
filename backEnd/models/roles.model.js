module.exports = function (sequelize, Sequelize) {
  const Roles = sequelize.define(
    "roles",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom: {
        type: Sequelize.STRING,
      },
    },
    { timestamp: true }
  );
  return Roles;
};
