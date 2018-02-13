/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('warehouse', {
    warehouseId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'warehouse_id'
    },
    warehouseStatus: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'warehouse_status'
    },
    warehouseName: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'warehouse_name'
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
    tableName: 'warehouse'
  });
};
