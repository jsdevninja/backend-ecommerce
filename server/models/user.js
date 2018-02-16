/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      field: 'email'
    },
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'password_hash'
    },
    status: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'status'
    },
    authKey: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'auth_key'
    },
    passwordResetToken: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
      field: 'password_reset_token'
    },
    accountActivationToken: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'account_activation_token'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
      defaultValue: new Date()
    },
    userStatus: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      field: 'user_status'
    }
  }, {
    tableName: 'user'
  });

  return User
};
