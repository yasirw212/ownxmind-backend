
const db = require('../model/database.js')
// const Client = require('pg').Client
// let client = new Client({
//     connectionString: 'postgres://me:gxQFvhvaTfIMpLd0OSTADsp2kLnA9agd@dpg-cl7eku76e7vc739s6630-a.oregon-postgres.render.com/ownxmind?ssl=true'
// })


// setInterval(() => {
//     client = new Client({
//         connectionString: 'postgres://me:gxQFvhvaTfIMpLd0OSTADsp2kLnA9agd@dpg-cl7eku76e7vc739s6630-a.oregon-postgres.render.com/ownxmind?ssl=true'
//     })
    
// }, 50000)
// client.connect()

const getProducts = async (req, res) =>{
    try {
        await db.query(`SELECT * FROM products`, (err, results) => {
            if(err){
                console.log(err)
            }
            return res.status(200).json(results.rows)
        })
    } catch (error) {
        console.log(error)
    }
}

const getPhotos = async (req, res) => {
    
    try {
        await db.query(`SELECT * FROM products_photos`, (err, results) => {
            if(err){
                console.log(err)
            }
            return res.status(200).json(results.rows)
        })
    } catch (error) {
        
    }
}

const getPhotosById = async (req, res) =>{
    const {id} = req.params
    try {
        await db.query(`SELECT * FROM products_photos WHERE products_id = $1`, [id], (err, results) => {
            if(err){
                console.log(err)
            }
            return res.status(200).json(results.rows)
        })
    } catch (error) {
        
    }
}


module.exports = {getProducts, getPhotos, getPhotosById}