/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderShipmentProduct', {
    orderShipmentProductId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'order_shipment_product_id'
    },
    orderShipmentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'order_shipment',
        key: 'order_shipment_id'
      },
      field: 'order_shipment_id'
    },
    orderPaymentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'order_payment',
        key: 'order_payment_id'
      },
      field: 'order_payment_id'
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
    inventoryLotId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'inventory_lot',
        key: 'inventory_lot_id'
      },
      field: 'inventory_lot_id'
    },
    productQuantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_quantity'
    },
    productMovement: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_movement'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at',
      defaultValue: new Date()
    },
    updatedBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'updated_by'
    }
  }, {
    tableName: 'order_shipment_product'
  });
};
