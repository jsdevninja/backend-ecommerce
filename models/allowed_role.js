/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('allowedRole', {
    allowedRoleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'allowed_role_id'
    },
    allowedRoleName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'allowed_role_name'
    }
  }, {
    tableName: 'allowed_role'
  });
};
