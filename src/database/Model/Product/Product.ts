import { INTEGER, Model, STRING } from 'sequelize';
import { connectDatabase } from '../../config/DatabaseConfiguration';
import { Category } from '../Category/Category';

export interface ProductInterface {
    id?: number,
    nome: string,
    descricao: string,
    id_category?: number
}

export class Product extends Model {
    id?: number;
    nome: string;
    descricao: string;
    id_category: number;
}

Product.init(

    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: INTEGER
        },
        nome: {
            type: STRING,
            allowNull: false
        },
        descricao: {
            type: STRING,
            allowNull: false
        },
        id_category: {
            type: INTEGER,
            allowNull: true
        }

    }, {
    sequelize: connectDatabase,
    modelName: 'product',
    freezeTableName: true,
    timestamps: true
});

Product.belongsTo(Category, {foreignKey: 'id_category'})

Product.sync();