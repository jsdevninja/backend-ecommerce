/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderPayment', {
    orderPaymentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'order_payment_id'
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
    orderPaymentType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'order_payment_type'
    },
    orderPaymentStatus: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'order_payment_status'
    },
    orderPaymentProductTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_payment_product_total'
    },
    orderPaymentDiscount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_payment_discount'
    },
    orderPaymentShipping: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_payment_shipping'
    },
    orderPaymentTax: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_payment_tax'
    },
    orderPaymentTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_payment_total'
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
    tableName: 'order_payment'
  });
};
