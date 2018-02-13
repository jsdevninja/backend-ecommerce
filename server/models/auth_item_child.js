/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authItemChild', {
    parent: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'auth_item',
        key: 'name'
      },
      field: 'parent'
    },
    child: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'auth_item',
        key: 'name'
      },
      field: 'child'
    }
  }, {
    tableName: 'auth_item_child',
    timestamps: false,
  });
};
