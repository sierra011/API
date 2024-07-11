import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'Ryan',
    password: 'Olliver39849476@',
    database: 'bdcopa',
});

conexao.connect()

export default  conexao