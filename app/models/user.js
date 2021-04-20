module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    User.associate = function(models) {
        User.hasMany(models.Item, {
            onDelete: "Cascade"
        });
    };

    return User;
};