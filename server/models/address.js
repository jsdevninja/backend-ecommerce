/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address', {
    addressId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'address_id'
    },
    firstName: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'last_name'
    },
    companyName: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'company_name'
    },
    address1: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'address1'
    },
    address2: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'address2'
    },
    address3: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'address3'
    },
    phone1: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'phone1'
    },
    phone1Type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'phone1_type'
    },
    phone2: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'phone2'
    },
    phone2Type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      field: 'phone2_type'
    },
    city: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'city'
    },
    state: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: 'state'
    },
    zip: {
      type: DataTypes.STRING(12),
      allowNull: false,
      field: 'zip'
    },
    approvedAddress: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'approved_address'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at',
      defaultValue: new Date()
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
    tableName: 'address'
  });
};
