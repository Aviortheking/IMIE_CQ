module.exports = class ApiController {
	
	constructor(db) {
		this.db = db
	}

	all(req, res) {
		res.send(this.db.getAll())
	}

	single(req, res) {
		if (req.query.id === '') {
			res.send({ message: 'Identifiant incorrect' })
		} else {
			res.send(this.db.getByID(req.query.id))
		}
	}
}