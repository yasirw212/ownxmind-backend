const pool = require('../model/database.js')
const db = require('../model/database.js')

const getProducts = async (req, res) =>{
    try {
        await pool.query(`SELECT * FROM products`, (err, results) => {
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
        await pool.query(`SELECT * FROM products_photos`, (err, results) => {
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
        await pool.query(`SELECT * FROM products_photos WHERE products_id = $1`, [id], (err, results) => {
            if(err){
                throw Error 
            }
            return res.status(200).json(results.rows)
        })
    } catch (error) {
        
    }
}


module.exports = {getProducts, getPhotos, getPhotosById}