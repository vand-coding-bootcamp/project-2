module.exports = function(sequelize, DataTypes) {
  var Friends = sequelize.define("Friends", {
    friends: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.STRING,
    userId: DataTypes.INT
  });
};

Friends.associate = function(models) {
  Friends.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
  return Friends;
};
