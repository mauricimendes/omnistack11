const conection = require('../database/conection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    async index(req, res) {
        const ongs = await conection('ongs').select('*')
        return res.json(ongs)
    },
    
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body

        const id = generateUniqueId()
        
        await conection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({ id })
    }
}