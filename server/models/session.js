/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('session', {
    id: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    expire: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'expire'
    },
    data: {
      type: "LONGBLOB",
      allowNull: false,
      field: 'data'
    }
  }, {
    tableName: 'session',
    timestamps: false,
  });
};
