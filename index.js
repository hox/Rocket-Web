const express = require('express')
const app = express()
const router = express.Router()
const port = 80 | process.env.PORT

console.log('Ready!')
console.log(`Listening to * on ${port}`)

app.use(express.static('public', {
    extensions: ['html', 'htm']
}))

app.listen(port)