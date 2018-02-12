/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('inventoryLot', {
        inventoryLotId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'inventory_lot_id'
        },
        supplierId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'supplier',
                key: 'supplier_id'
            },
            field: 'supplier_id'
        },
        inventoryId: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            field: 'inventory_id'
        },
        lotComments: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'lot_comments'
        },
        lotStatus: {
            type: DataTypes.INTEGER(3).UNSIGNED,
            allowNull: false,
            field: 'lot_status'
        },
        lotOriginalQuantity: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '0',
            field: 'lot_original_quantity'
        },
        lotOnHand: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '0',
            field: 'lot_on_hand'
        },
        lotReserved: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '0',
            field: 'lot_reserved'
        },
        lotPreorderDate: {
            type: DataTypes.DATE,
            field: 'lot_preorder_date'
        },
        lotPreorder: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '0',
            field: 'lot_preorder'
        },
        lotPriceAdjustment: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '0.00',
            field: 'lot_price_adjustment'
        },
        lotSequence: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'lot_sequence'
        },
        lotDisplay: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: false,
            field: 'lot_display'
        },
        internalLotId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'internal_lot_id'
        },
        externalLotId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'external_lot_id'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updated_at'
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
        tableName: 'inventory_lot'
    });
};
