const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000
const { connect } = require('mongoose')
const { API_PORT, MONGO_URI } = process.env
const server = http.createServer(app)

const connection = async() => {
    try {
        await connect(MONGO_URI)
        console.log("Database connection successfull")
        
        server.listen(port, () => console.log(`Listening for requests on port ${API_PORT}`) )
    } catch (err) {
        console.log(err.message)
    }
}

connection()