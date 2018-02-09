/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userSupplier', {
    userSupplierId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'user_supplier_id'
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
    supplierId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'supplier',
        key: 'supplier_id'
      },
      field: 'supplier_id'
    }
  }, {
    tableName: 'user_supplier'
  });
};
