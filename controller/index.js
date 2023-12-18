const supaBase = require('../model/database')


const getProducts = async (req, res) =>{
    try {
        const {data} = await supaBase.from('products').select('*')
        if(!data) {
            throw new Error('failed')
        }
        return res.status(200).json(data)
    } catch (error) {
        res.status(404).json({status: 'Failed', error: error})
    }
}

const getPhotos = async (req, res) => { 
    try {
        const {data} = await supaBase.from('products_photos').select('*')
        if(!data) {
            throw new Error('failed')
        }
        return res.status(200).json(data)
    } catch (error) {
        res.status(404).json({status: 'Failed', error: error})
    }
}

const getPhotosById = async (req, res) =>{
    try {
        const {data} = await supaBase.from('products_photos').select('*')
        if(!data) {
            throw new Error('failed')
        }
        return res.status(200).json({status: "Success", data: data})
    } catch (error) {
        res.status(404).json({status: 'Failed', error: error})
    }
}


module.exports = {getProducts, getPhotos, getPhotosById}