const express = require('express')
const express_app = express()

express_app.get('/', (req, res) => {
  res.send({message:'Hello World!'})
})

module.exports = {express_app}