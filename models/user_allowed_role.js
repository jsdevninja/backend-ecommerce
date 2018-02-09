/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userAllowedRole', {
    userAllowedRoleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'user_allowed_role_id'
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
    allowedRoleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'allowed_role',
        key: 'allowed_role_id'
      },
      field: 'allowed_role_id'
    }
  }, {
    tableName: 'user_allowed_role'
  });
};
