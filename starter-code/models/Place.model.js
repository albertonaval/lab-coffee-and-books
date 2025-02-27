const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            //enum: ['Cafeteria', 'Tienda'],
            required: true
        },
        location: {
            type: {
                type: String,
            },
            coordinates: [Number]
        },
    },
    {
        timestamps: true
    }
)


placeSchema.index({ location: '2dsphere' })

const Place = mongoose.model('Place', placeSchema)

module.exports = Place
