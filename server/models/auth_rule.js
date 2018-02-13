/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authRule', {
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'name'
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'data'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at',
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at',
      defaultValue: new Date()
    }
  }, {
    tableName: 'auth_rule'
  });
};
