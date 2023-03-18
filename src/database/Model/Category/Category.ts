import { INTEGER, Model, STRING } from 'sequelize';
import { connectDatabase } from '../../config/DatabaseConfiguration';

export interface CategoryInterface {
    id?: number,
    nome: string,
    descricao: string,
}

export class Category extends Model {
    id: number;
    nome: string;
    descricao: string;
}

Category.init(

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

    }, {
    sequelize: connectDatabase,
    modelName: 'category',
    freezeTableName: true,
    timestamps: true
});

Category.sync();