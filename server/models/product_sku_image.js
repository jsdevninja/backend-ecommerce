/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productSkuImage', {
    productSkuImageId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_sku_image_id'
    },
    productSkuImageKey: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_sku_image_key'
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
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'image_url'
    },
    productSkuImageSequence: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'product_sku_image_sequence'
    },
    productImageSequence: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      field: 'product_image_sequence'
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
    tableName: 'product_sku_image',
    updatedAt: false,
  });
};
