/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'order_id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'user_id'
    },
    orderProductTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_product_total'
    },
    orderDiscount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_discount'
    },
    orderShipping: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_shipping'
    },
    orderTax: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_tax'
    },
    orderTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'order_total'
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
    updatedBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'updated_by'
    }
  }, {
    tableName: 'order'
  });
};
