const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('welcome to about page')
}
)

app.get('/contect', (req, res) => {
  res.send('welcome to contect page')
}
)

app.get('/project', (req, res) => {
  res.send('welcome to project page')
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})