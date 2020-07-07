const Sequelize = require('sequelize'); //conectar com o db

// Conexao com o banco e dados Mysql
const sequelize = new Sequelize('postapp', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}