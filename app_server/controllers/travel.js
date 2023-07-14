const fs = require('fs')

const trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf-8"))

const travel = (req, res) => {
    res.render('traveler', {
        title: "Travel Getaways",
        trips
    })
}

module.exports = {
    travel
}