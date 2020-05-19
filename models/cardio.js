module.exports = function(sequelize, DataTypes) {
  var Cardio = sequelize.define("Cardio", {
    cardio_act: DataTypes.STRING,
    start: DataTypes.DATETIME,
    end: DataTypes.DATETIME,
    userId: DataTypes.INT
  });
};

Cardio.associate = function(models) {
  Cardio.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
  return Cardio;
};
