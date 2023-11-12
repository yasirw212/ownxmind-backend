// const Pool = require('pg').Pool 
const Client = require('pg').Client

const client = new Client({
    connectionString: 'postgres://me:gxQFvhvaTfIMpLd0OSTADsp2kLnA9agd@dpg-cl7eku76e7vc739s6630-a.oregon-postgres.render.com/ownxmind?ssl=true'
})

setInterval(() => {
    client.connect()
}, 50000)


// const pool = new Pool({
//     user: 'me',
//     database: 'ownxmind',
//     host: 'dpg-cl7eku76e7vc739s6630-a.oregon-postgres.render.com',
//     password: 'gxQFvhvaTfIMpLd0OSTADsp2kLnA9agd',
//     port: 5432,
//     ssl: true,
//     tls: true
// })
                                                                                                                                                                   


module.exports = client