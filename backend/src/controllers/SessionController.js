const conection = require('../database/conection')

module.exports = {
    async create(req, res) {
        const { id } = req.body
        const ong = await conection('ongs')
            .where('id', id)
            .select('name')
            .first()

        if(!ong) {
            return res.status(400).json({ error: `No ONG found with this ID: ${id}` })
        }

        return res.json(ong)
    }
}