/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productOptionTitle', {
    productOptionTitleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_option_title_id'
    },
    productOptionTitleKey: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_option_title_key'
    },
    isValid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'is_valid'
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
    productTitleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'product_title',
        key: 'product_title_id'
      },
      field: 'product_title_id'
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
    tableName: 'product_option_title'
  });
};
