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
    quantityOnHand: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'quantity_on_hand'
    },
    quantityReserved: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'quantity_reserved'
    },
    quantityPreorder: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'quantity_preorder'
    },
    productSkuId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'product_sku',
        key: 'product_sku_id'
      },
      field: 'product_sku_id'
    },
    warehouseId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'warehouse_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    createdBy: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'created_by'
    }
  }, {
    tableName: 'inventory'
  });
};
