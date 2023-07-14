const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.static('public'))

app.use('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html')
    res.sendFile(filePath)
})

module.exports = app