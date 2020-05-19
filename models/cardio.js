module.exports = function(sequelize, DataTypes) {
  var Cardio = sequelize.define("Cardio", {
    cardio_act: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
  });

  Cardio.associate = function(models) {
    Cardio.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Cardio;
};
