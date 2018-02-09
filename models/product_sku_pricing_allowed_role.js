/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productSkuPricingAllowedRole', {
    productSkuPricingAllowedRoleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_sku_pricing_allowed_role_id'
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
    allowedRoleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'allowed_role',
        key: 'allowed_role_id'
      },
      field: 'allowed_role_id'
    }
  }, {
    tableName: 'product_sku_pricing_allowed_role'
  });
};
