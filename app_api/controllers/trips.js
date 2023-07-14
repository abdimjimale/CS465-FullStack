const Trip = require('../models/trvlrModel')

// GET: /trips - retrievs a list of all trips
const get_trips = async(req, res) => {
    try {
        const trips = await Trip.find({})
        res.json(trips).status(201)
    } 
    catch (err) {
        res.json({ "message": err.message}).status(500)
    }
}

// GET: /trips/:tripCode - return a single trip
const get_trip = async(req, res) => {
    const code = req.params.tripCode

    try {
        const trip = await Trip.find({code})

        if(!trip || !trip.length) {
            res.json({ "message": "Trip not found" }).status(404)
        }
        else {
            res.json(trip).status(201) 
        }

    } 
    catch (err) {
        res.json({ "message": err.message}).status(500)
    }
}

module.exports = {
    get_trips,
    get_trip
}