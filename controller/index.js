const supaBase = require('../model/database')


const getProducts = async (req, res) =>{
    let productsData = []
    try {
        const {data} = await supaBase.from('products').select('*')
        productsData = [...data]
        if(!data) {
            throw new Error('failed')
        } else {
            try {
                const {data} = await supaBase.from('products_sizes').select('*')
                for(let i = 0; i < productsData.length; i++){
                    let sizes = data.filter(size => size.product_id == productsData[i].id)
                    productsData[i] = { ...productsData[i], sizes: sizes}
                }
                
            } catch (error) {
                console.log(error)
            }
            if(!data){
                throw new Error('failed')
            } else {
                const {data} = await supaBase.from('details').select('*')
                for(let i = 0; i < productsData.length; i++){
                    let details = data.find(detail => detail.id == productsData[i].details_id)
                    productsData[i] = { ...productsData[i], details: details.details}
                }
                console.log(productsData)
                return res.json(productsData)
            }
        }
        
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


module.exports = {getProducts, getPhotosById}