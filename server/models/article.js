/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'user_id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'title'
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'summary'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'content'
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'status'
    },
    category: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'category'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
      defaultValue: new Date()
    }
  }, {
    tableName: 'article'
  });
};
