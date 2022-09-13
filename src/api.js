var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
var port = process.env.PORT || 8085;
// Nuestra API va a retornar un arreglo de tres elementos.
app.get('/datos', function (req, res) {
  res.json([
    {
      id: '0000',
      name: "Daniel",
      age: 30,
    },
    {
      id: '0001',
      name: "Juan",
      age: 20,
    },
    {
      id: '0002',
      name: "Joaquin",
      age: 0,
    },
  ])
})

app.listen(port)
console.log('API escuchando en el puerto ' + port)