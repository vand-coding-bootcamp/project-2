module.exports = function(sequelize, DataTypes) {
  var Strength = sequelize.define(
    "Strength",
    {
      strength_act: DataTypes.STRING,
      start: DataTypes.DATE,
      end: DataTypes.DATE
    },
    {
      freezeTableName: true
    }
  );

  Strength.associate = function(models) {
    Strength.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Strength;
};
