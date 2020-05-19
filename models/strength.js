module.exports = function(sequelize, DataTypes) {
  var Strength = sequelize.define("Strength", {
    strength_act: DataTypes.STRING,
    start: DataTypes.DATETIME,
    end: DataTypes.DATETIME,
    userId: DataTypes.INT
  });
};

Strength.associate = function(models) {
  Strength.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
  return Strength;
};
