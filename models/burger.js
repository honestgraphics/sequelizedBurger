module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25],
      }
    },
    devoured: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
  }, {
    timestamps: false
  });


return Burgers;
};