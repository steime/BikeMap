import express, { Request, Response } from 'express';
import { sequelize } from './db/initdb';
import { User } from './db/user';
import path from 'path';
import { Location, locations } from './location';

require('dotenv').config();

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
 
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req: Request, res: Response) => {
  res.render('index');  
});

app.get('/location/:name', (req: Request, res: Response) => {
  const name = req.params.name;
  const location = locations.find((loc: Location) => loc.name === name);
  if (!location) {
    return res.status(404).send('Location not found');
  }
  res.render('location', { location }); 
});

app.get('/test', async (req: Request, res: Response) => {
  try {
    // Read user data from the database
    const users = await User.findByPk(1); 
    res.json(users);
  } catch (error) {
    console.error('Error reading users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
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
