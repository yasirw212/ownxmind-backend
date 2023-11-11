const Pool = require('pg').Pool 

const pool = new Pool({
    user: 'me',
    database: 'ownxmind',
    host: 'dpg-cl7eku76e7vc739s6630-a',
    password: 'gxQFvhvaTfIMpLd0OSTADsp2kLnA9agd',
    port: 5432
})
                                                                                                                                                                   


module.exports = pool