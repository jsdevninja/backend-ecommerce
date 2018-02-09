/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productSkuPricing', {
    productSkuPricingId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_sku_pricing_id'
    },
    productSkuPricingKey: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_sku_pricing_key'
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
    discountType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'discount_type'
    },
    discountValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'discount_value'
    },
    discountOptions: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'discount_options'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    createdBy: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'created_by'
    },
    updatedBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'updated_by'
    }
  }, {
    tableName: 'product_sku_pricing'
  });
};
