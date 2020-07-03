const assert = require('assert')
const IndexController = require('../Controller/IndexController')
const ApiController = require('../Controller/ApiController')
const httpMocks = require('node-mocks-http')

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
    describe("Test des methode de l'API CONTROLLER", () => {
        it(" Doit retourner le resultat de l'appel à la méthode ?all de l'API, possible que ce soit un objet vide ", () => {
            //Arrange
            const data = []
            const req = {}
            const db = {
                getAll: () => {
                    return data
                },
            }
            const apiController = new ApiController(db)

            let result = null
            const res = {
                send: (value) => {
                    result = value
                },
            }

            // Act
            apiController.all(req, res)

            // Assert
            assert.equal(result, data)
        })
    })
    it("Doit retouner le resultat de l'appel getByID par la route ?id=", () => {
        //Arrange
        const data = { id: 1 }
        const req = {
            query: {
                id: '1',
            },
        }
        const db = {
            getByID: (id) => {
                return data
            },
        }
        const apiController = new ApiController(db)

        let result = null
        const res = {
            send: (value) => {
                result = value
            },
        }

        // Act
        apiController.single(req, res)

        // Assert
        assert.equal(result, data)
    })

    it("Doit retouner le message 'Identifiant incorrect' si l'id est vide", () => {
        //Arrange
        const error = { message: 'Identifiant incorrect' }
        const req = {
            query: {
                id: '',
            },
        }
        const db = {
            getByID: (id) => {
                return null
            },
        }
        const apiController = new ApiController(db)

        let result = null
        const res = {
            send: (value) => {
                result = value
            },
        }

        // Act
        apiController.single(req, res)

        // Assert
        assert.deepEqual(result, error)
    })

    it("Doit retouner le message 'Identifiant incorrect' si l'id n'existe pas", () => {
        //Arrange
        const error = { message: 'Identifiant incorrect' }
        const req = {
            query: {
                id: '9999999999',
            },
        }
        const db = {
            getByID: (id) => {
                return null
            },
        }
        const apiController = new ApiController(db)

        let result = null
        const res = {
            send: (value) => {
                result = value
            },
        }

        // Act
        apiController.single(req, res)

        // Assert
        assert.deepEqual(result, error)
    })

    it("Doit retouner un code HTTP 404 si l'id est incorrect", () => {
        //Arrange
        var req = httpMocks.createRequest({
            method: 'GET',
            url: '/?id=999999999',
            query: {
                id: 999999999,
            },
        })

        var res = httpMocks.createResponse()

        const error = { status: 404 }

        const db = {
            getByID: (id) => {
                return null
            },
        }
        const apiController = new ApiController(db)

        // Act
        apiController.single(req, res)

        // Assert
        assert.deepEqual(res.status, error.status)
    })
})
