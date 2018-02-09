/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoryProduct', {
    categoryProductId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'category_product_id'
    },
    categoryId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      },
      field: 'category_id'
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
    primaryCategory: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      field: 'primary_category'
    }
  }, {
    tableName: 'category_product'
  });
};
