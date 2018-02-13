/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userStore', {
    userStoreId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'user_store_id'
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
    storeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'store',
        key: 'store_id'
      },
      field: 'store_id'
    },
    defaultStore: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'default_store'
    }
  }, {
    tableName: 'user_store',
    timestamps: false,
  });
};
