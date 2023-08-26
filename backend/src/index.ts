import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize';

dotenv.config();

export const databaseUrl = process.env.DATABASE_URL;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log('DATABASE_URL from env:', process.env.DATABASE_URL);  
export const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
});

// Test the connection, wait 5 seconds to connect
setTimeout(() => {
sequelize
  .authenticate()
  .then(async () => {
    console.log('Connection to the database has been established successfully.');
    
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
}, 5000);
