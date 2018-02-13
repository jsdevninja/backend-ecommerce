/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', {
    storeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'store_id'
    },
    storeName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'store_name'
    },
    storeStatus: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'store_status'
    },
    shippingAddress: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'address',
        key: 'address_id'
      },
      field: 'shipping_address'
    },
    billingAddress: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'address',
        key: 'address_id'
      },
      field: 'billing_address'
    },
    storeType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'store_type'
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
    tableName: 'store'
  });
};
