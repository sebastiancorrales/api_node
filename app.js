const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    "message":"Ruta funcionando por GET"
  })
})
app.post('/', (req, res) => {
  res.send({
    "message":"Ruta funcionando por POST"
  })
})
app.put('/', (req, res) => {
  res.send({
    "message":"Ruta funcionando por PUT"
  })
})
app.delete('/', (req, res) => {
  res.send({
    "message":"Ruta funcionando por DELETE"
  })
})
app.patch('/', (req, res) => {
  res.send({
    "message":"Ruta funcionando por PATCH"
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})