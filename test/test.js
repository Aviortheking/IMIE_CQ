const assert = require('assert')
const IndexController = require('../Controller/IndexController')

describe("Test de l'index.js", () => {
    it("Doit retourner une réponse 'SoftWare Quality Module'", () => {
        // Arrange

        const data = 'SoftWare Quality Module'
        const indexController = new IndexController()
        let result = null

        const req = {}
        const res = {
            send: (value) => {
                result = value
            },
        }

        // Act
        indexController.index(req, res)

        // Assert

        assert.equal(result, data)
    })
})
describe('APIController', () => {
    it(" Doit retourner le resultat de l'appel à la méthode ?all de l'API, possible que ce soit un objet vide ", () => {
        //Arrange
        const data = []
        const db = {
            getAll: () => {
                return data
            },
        }
        const apiController = new apiController(db)

        let result = null
        const res = {
            send: (value) => {
                result = value
            },
        }

        // Act
        apiController.all(req, res)

        // Assert
        assert.equal(result.result, data)
    })
})
