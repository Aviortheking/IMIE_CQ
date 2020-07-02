const assert = require('assert')

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
