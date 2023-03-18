import { Sequelize } from 'sequelize';
import '../../configs/env';

export const connectDatabase = new Sequelize(
    process.env.DB_SCHEMA,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    host: process.env.DB_SERVER,
    dialect: 'mysql',
    logging: false
});



connectDatabase
    .sync()
    .then(value => {
        console.log('Models sincronizados.')
    })
    .catch(reason => {
        console.log('Erro ao sincronizar os modulos!')
    })

