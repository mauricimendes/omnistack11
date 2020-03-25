const conecetion = require('../database/conection')

module.exports = {
    async index(req, res) {
        const ong_id = req.headers.authorization
        
        const incidents = await conecetion('incidents')
            .where('ong_id', ong_id)
            .select('*')
        
        return res.json(incidents)
    }
}