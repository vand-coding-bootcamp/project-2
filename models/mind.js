module.exports = function(sequelize, DataTypes) {
  var Mind = sequelize.define(
    "Mind",
    {
      mind_act: DataTypes.STRING,
      start: DataTypes.DATE,
      end: DataTypes.DATE
    },
    {
      freezeTableName: true
    }
  );

  Mind.associate = function(models) {
    Mind.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Mind;
};
