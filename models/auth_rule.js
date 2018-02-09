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
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'auth_rule'
  });
};
