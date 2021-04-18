module.exports = function(sequelize, DataTypes){
    var Item = sequelize.define("item", {
        // image: {type: sequelize.BLOB},
        categories: {type: sequelize.STRING},
        description: {type: sequelize.STRING}
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

