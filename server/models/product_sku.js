/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productSku', {
    productSkuId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_sku_id'
    },
    productSkuKey: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_sku_key'
    },
    isValid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'is_valid'
    },
    productId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'product',
        key: 'product_id'
      },
      field: 'product_id'
    },
    skuExternal: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'sku_external'
    },
    skuInternal: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'sku_internal'
    },
    skuUom: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'sku_uom'
    },
    uomQuantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'uom_quantity'
    },
    skuInformation: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'sku_information'
    },
    skuShortInformation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'sku_short_information'
    },
    skuLength: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'sku_length'
    },
    skuWidth: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'sku_width'
    },
    skuHeight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'sku_height'
    },
    skuWeight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'sku_weight'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    createdBy: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'created_by'
    }
  }, {
    tableName: 'product_sku'
  });
};
