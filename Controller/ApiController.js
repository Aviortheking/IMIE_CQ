module.exports = class ApiController {
	
	constructor(db) {
		this.db = db
	}

	all(req, res) {
		res.send(this.db.getAll())
	}

	single(req, res) {
		const entity = this.db.getByID(req.query.id)
		if (req.query.id === '' || !entity) {
			res.send({ message: 'Identifiant incorrect' })
		} else {
			res.send(entity)
		}
	}
}