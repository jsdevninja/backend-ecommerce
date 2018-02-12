/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authAssignment', {
    itemName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'auth_item',
        key: 'name'
      },
      field: 'item_name'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    createdAt: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'created_at'
    }
  }, {
    tableName: 'auth_assignment'
  });
};
