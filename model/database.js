const Pool = require('pg').Pool 

const pool = new Pool({
    user: 'me',
    database: 'ownxmind',
    host: 'localhost',
    password: 'password',
    port: 5432
})

module.exports = pool