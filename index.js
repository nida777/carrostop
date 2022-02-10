const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000

//Conexão com Banco de Dados
const connect = require('./mysqlFile')
const db = require('mysql').createPool(connect)

app.use(express.json())
app.use('/public', express.static('public'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main', extname: 'hbs'
}))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/infos', (req, res) => {
  try {
  if(!req.body.email) throw 'Favor informe seu email!'
    db.query(`INSERT INTO info (email) VALUES ('${req.body.email}')`, (error) => {
      if (error) return res.status(500).send(error.sqlMessage)
      res.status(200).send()
    })
  } catch (error) {
    res.status(400).send(error)
  }
})

app.listen(PORT, () => {
  console.log("Backend executando...")
})




