module.exports = function(sequelize, DataTypes){
    var Item = sequelize.define("Item", {
        // image: {type: sequelize.BLOB},
        categories: DataTypes.STRING,
        description: DataTypes.TEXT
    });

    Item.associate = function(models) {
        Item.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Item;
};

