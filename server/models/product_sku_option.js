/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productSkuOption', {
    productSkuOptionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_sku_option_id'
    },
    productSkuOptionKey: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_sku_option_key'
    },
    isValid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'is_valid'
    },
    productSkuId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'product_sku',
        key: 'product_sku_id'
      },
      field: 'product_sku_id'
    },
    productOptionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'product_option',
        key: 'product_option_id'
      },
      field: 'product_option_id'
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
    tableName: 'product_sku_option',
    updatedAt: false,
  });
};
