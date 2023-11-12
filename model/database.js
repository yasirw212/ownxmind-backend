const Pool = require('pg').Pool 
// const Client = require('pg').Client
// let client = client = new Client({
//     connectionString: 'postgres://me:gxQFvhvaTfIMpLd0OSTADsp2kLnA9agd@dpg-cl7eku76e7vc739s6630-a.oregon-postgres.render.com/ownxmind?ssl=true'
// })


// setInterval(() => {
//     client = new Client({
//         connectionString: 'postgres://me:gxQFvhvaTfIMpLd0OSTADsp2kLnA9agd@dpg-cl7eku76e7vc739s6630-a.oregon-postgres.render.com/ownxmind?ssl=true'
//     })
//     client.connect()
// }, 50000)


const pool = new Pool({
    user: 'me',
    database: 'ownxmind',
    host: 'localhost',
    password: 'password',
    port: 5435
})
                                                                                                                                                                   


module.exports = pool