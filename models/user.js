module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 15]
      }
    },
    height: {
      type: DataTypes.INT,
      allowNull: false
    },
    height_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.INT,
      allowNull: false
    },
    weight_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

User.associate = function(models) {
  User.hasMany(models.Friends, models.Cardio, models.Mind, models.Strength);
  return User;
};