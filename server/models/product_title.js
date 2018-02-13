/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productTitle', {
    productTitleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_title_id'
    },
    productTitleKey: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_title_key'
    },
    isValid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'is_valid'
    },
    titleName: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'title_name'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
      field: 'created_at'
    },
    createdBy: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'created_by'
    }
  }, {
    tableName: 'product_title',
    updatedAt: false,
  });
};
