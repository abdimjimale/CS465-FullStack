const http = require('http')
const app = require('./app')
const { connect } = require('mongoose')
const { API_PORT, MONGO_URI } = process.env
const server = http.createServer(app)

const connection = async() => {
    try {
        await connect(MONGO_URI)
        console.log("Database connection successful")
        
        server.listen(API_PORT, () => console.log(`Listening for requests on port ${API_PORT}`) )
    } catch (err) {
        console.log(err.message)
    }
}
connection()