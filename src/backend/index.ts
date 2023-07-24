import express, { Request, Response } from 'express';

import { User } from '../db/user';
import { sequelize } from '../db/initdb';


require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}); 
 
// An array of locations
const locations = [
  { id: 1, name: 'Location 1', latitude: 52.5200, longitude: 13.4050 },
  { id: 2, name: 'Location 2', latitude: 52.45, longitude: 13.5 },
  // ... more locations 
];

// Locations API endpoint
app.get('/api/locations', (req, res) => {
  res.status(200).json(locations);
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
