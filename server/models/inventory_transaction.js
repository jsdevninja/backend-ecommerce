/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryTransaction', {
    inventoryTransactionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'inventory_transaction_id'
    },
    transactionType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'transaction_type'
    },
    inventoryQuantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'inventory_quantity'
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
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'order',
        key: 'order_id'
      },
      field: 'order_id'
    },
    inventoryLotId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'inventory_lot',
        key: 'inventory_lot_id'
      },
      field: 'inventory_lot_id'
    },
    warehouseId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'warehouse',
        key: 'warehouse_id'
      },
      field: 'warehouse_id'
    },
    inventoryComments: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'inventory_comments'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    createdBy: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'created_by'
    },
    updatedBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'updated_by'
    }
  }, {
    tableName: 'inventory_transaction'
  });
};
