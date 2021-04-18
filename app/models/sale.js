

module.exports = function(sequelize, DataTypes){
    var Sale = sequelize.define("sale", {
        // image: {type: sequelize.BLOB},
        categories: {type: sequelize.STRING},
        description: {type: sequelize.STRING}
    });

    Sale.associate = function(models) {
        Sale.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Sale;
};

