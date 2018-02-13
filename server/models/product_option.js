/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productOption', {
    productOptionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_option_id'
    },
    productOptionKey: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_option_key'
    },
    isValid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'is_valid'
    },
    optionName: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'option_name'
    },
    optionSequence: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      field: 'option_sequence'
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
    tableName: 'product_option',
    updatedAt: false,
  });
};
