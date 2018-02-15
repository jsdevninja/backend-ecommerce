/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userRefreshToken', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'user_id'
    },
    refreshToken: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'refresh_token'
    }
  }, {
    tableName: 'user_refresh_token',
    timestamps: false,
  });
};