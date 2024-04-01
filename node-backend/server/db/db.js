const Pool = require('pg').Pool;

const dbConfig = {
    user: 'postgres',
    password: 'Theatre@977',
    host: 'localhost',
    port: 5432,
    database: 'marketHub'
}
const pool = new Pool(dbConfig);

module.exports = pool;