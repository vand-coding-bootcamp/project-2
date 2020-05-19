module.exports = function(sequelize, DataTypes) {
  var Mind = sequelize.define("Mind", {
    mind_act: DataTypes.STRING,
    start: DataTypes.DATETIME,
    end: DataTypes.DATETIME,
    userId: DataTypes.INT
  });
};

Mind.associate = function(models) {
  Mind.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
  return Mind;
};
