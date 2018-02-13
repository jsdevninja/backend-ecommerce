/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventory', {
    inventoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'inventory_id'
    },
    
  }, {
    tableName: 'inventory',
    timestamps: false,
  });
};
