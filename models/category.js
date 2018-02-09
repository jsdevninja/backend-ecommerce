/* jshint indent: 2 */

// TODO: Slug

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    root: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'root'
    },
    lft: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'lft'
    },
    rgt: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'rgt'
    },
    lvl: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      field: 'lvl'
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'name'
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'icon'
    },
    iconType: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'icon_type'
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'active'
    },
    selected: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'selected'
    },
    disabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'disabled'
    },
    readonly: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'readonly'
    },
    visible: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'visible'
    },
    collapsed: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'collapsed'
    },
    movableU: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'movable_u'
    },
    movableD: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'movable_d'
    },
    movableL: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'movable_l'
    },
    movableR: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'movable_r'
    },
    removable: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'removable'
    },
    removableAll: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'removable_all'
    }
  }, {
    tableName: 'category'
  });
};
