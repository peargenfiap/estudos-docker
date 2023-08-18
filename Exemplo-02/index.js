const express = require('express')
const moment = require('moment')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    const user = {
        name: "Teste",
        age: 19,
        serverDate: moment().format("DD/MM/YYYY HH:mm:ss:ssS")
    };
  res.end(JSON.stringify(user));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})