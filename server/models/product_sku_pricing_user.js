/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productSkuPricingUser', {
    productSkuPricingUserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_sku_pricing_user_id'
    },
    productSkuPricingId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'product_sku_pricing',
        key: 'product_sku_pricing_id'
      },
      field: 'product_sku_pricing_id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'user_id'
    }
  }, {
    tableName: 'product_sku_pricing_user',
    timestamps: false,
  });
};
