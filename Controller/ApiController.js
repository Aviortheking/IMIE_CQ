module.exports = class ApiController {
	
	constructor(db) {
		this.db = db
	}

	all(req, res) {
		res.status(200).json(this.db.getAll())
	}

	single(req, res) {
		const entity = this.db.getByID(req.query.id)
		if (req.query.id === '' || !entity) {
			res.status(404).json({ message: 'Identifiant incorrect' })
		} else {
			res.status(200).json(entity)
		}
	}
}