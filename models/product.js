/* jshint indent: 2 */

// TODO: Slug
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    productId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_id'
    },
    productKey: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_key'
    },
    isValid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'is_valid'
    },
    productName: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'product_name'
    },
    productInformation: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'product_information'
    },
    productShortInformation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'product_short_information'
    },
    productOptionTitleSequence: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'product_option_title_sequence'
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
    tableName: 'product'
  });
};
