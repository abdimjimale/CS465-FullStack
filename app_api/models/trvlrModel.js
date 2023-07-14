const { Schema, model } = require("mongoose")

const options = {
    required: true,
    type: String
}

const tripSchema = new Schema({
    code: {
        type: String,
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        index: true
    },
    length: options,
    start: {
        type: Date,
        required: true
    },
    resort: options,
    perPerson: options,
    image: options,
    description: options
})

const Trip = model('trip', tripSchema)
module.exports = Trip