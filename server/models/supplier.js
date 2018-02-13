/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplier', {
    supplierId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'supplier_id'
    },
    supplierStatus: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'supplier_status'
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
    supplierType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'supplier_type'
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
    tableName: 'supplier'
  });
};
