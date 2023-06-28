const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><br>Okwow')
})

app.get('/test', (req, res) => {
    res.send('<h1>Hello World!</h1><br>Hallo Veloo')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
  });
// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });