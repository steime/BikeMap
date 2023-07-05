import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';

require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello World!</h1><br>Okletsgo23');
});

app.get('/test', (req: Request, res: Response) => {
  res.send('<h1>Hello World!</h1><br>Hallo Veloo');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'postgres',
});

// Test the connection, wait 5 seconds to connect
setTimeout(() => {
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
}, 5000);