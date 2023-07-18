import express, { Request, Response } from 'express';
import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from './db/initdb';
import { User } from './db/user';

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



// Test the connection, wait 5 seconds to connect
setTimeout(() => {
sequelize
  .authenticate()
  .then(async () => {
    console.log('Connection to the database has been established successfully.');
    
    // Call the createUser function with name and email parameters
    await User.sync();
    // createUser('John Doe', 'john@example.com');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
}, 5000);
