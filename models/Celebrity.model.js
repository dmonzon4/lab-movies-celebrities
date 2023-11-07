//  Add your code here
const mongoose = require("mongoose")

const celebritySchema = new mongoose.Schema ({
    name: String,
    occupation: String,
    catchPhrase: String
})

const Celebrity = mongoose.model("Celebrity", celebritySchema)
// como el modelo se llama "Pokemon" la coleccion automaticamente se llamará "pokemons"

module.exports = Celebrity
