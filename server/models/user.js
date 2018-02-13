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
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      field: 'username'
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
      allowNull: false,
      field: 'status'
    },
    authKey: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'auth_key'
    },
    token: {
      type: DataTypes.STRING(64),
      allowNull: true,
      field: 'token'
    },
    accessToken: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'access_token'
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
      allowNull: false,
      field: 'user_status'
    }
  }, {
    tableName: 'user'
  });

  return User
};
