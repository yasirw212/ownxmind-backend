const Pool = require('pg').Pool 

const pool = new Pool({
    user: 'me',
    database: 'ownxmind',
    host: 'dpg-cl7eku76e7vc739s6630-a',
    password: 'gxQFvhvaTfIMpLd0OSTADsp2kLnA9agd',
    port: 5432
})
                                                                                                                                                                   
postgres://me:gxQFvhvaTfIMpLd0OSTADsp2kLnA9agd@dpg-cl7eku76e7vc739s6630-a.oregon-postgres.render.com/ownxmind

module.exports = pool