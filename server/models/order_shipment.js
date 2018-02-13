/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderShipment', {
    orderShipmentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'order_shipment_id'
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'order',
        key: 'order_id'
      },
      field: 'order_id'
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
    orderShipmentStatus: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'order_shipment_status'
    },
    orderShipmentType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'order_shipment_type'
    },
    orderShipmentProductTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_shipment_product_total'
    },
    orderShipmentDiscount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_shipment_discount'
    },
    orderShipmentShipping: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_shipment_shipping'
    },
    orderShipmentTax: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_shipment_tax'
    },
    orderShipmentTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_shipment_total'
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
    tableName: 'order_shipment'
  });
};
