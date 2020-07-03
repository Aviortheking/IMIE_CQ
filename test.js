this.test = 'pouet'

console.log(this.test) // retourne 'pouet'

const fn2 = function() {
	console.log(this.test)  // retourne undefined
	this.pokemon = 'go'
}
fn2()

console.log(this.pokemon)

const fn = () => {
	console.log(this.test) // retourne 'pouet'
	this.pokemon = 'go'
}
fn()

console.log(this.pokemon)
