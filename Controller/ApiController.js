module.exports = class ApiController {
	
	constructor(db) {
		this.db = db
	}

	all(req, res) {
		res.send(this.db.getAll())
	}
}