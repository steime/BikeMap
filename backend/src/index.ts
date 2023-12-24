import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import { createGebiet } from './db/gebiet';
import { sequelize } from './database';
import { Gebiet } from './db/initdb';

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
 

console.log(sequelize)


// An array of locations
const locations = [
  { id: 1, name: 'Davos', latitude: 46.80, longitude: 9.837 },
  { id: 2, name: 'Laax', latitude: 46.80, longitude: 9.25 },
  // ... more locations 
];

// Locations API endpoint 
app.get('/api/locations', async (req: Request, res: Response) => {
  try {
    const gebiete = await Gebiet.findAll();
    res.json(gebiete);
  } catch (error) {
    console.error('Error fetching Gebiete:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/locations', async (req: Request, res: Response) => {
  try {
    const { name, lastUpdate, openingHours, numberOfAnlagen, xCoordinate, yCoordinate, website, region, rating, price } = req.body;
    
    const newGebiet = await createGebiet(name, lastUpdate, openingHours, numberOfAnlagen, xCoordinate, yCoordinate, website, region, rating, price);
    
    res.status(201).json(newGebiet);
  } catch (error) {
    console.error('Error in POST /gebiete:', error);
    res.status(500).json({ error: error.message });
  }
});

sequelize.authenticate()
  .then(async () => {
    console.log('Connection to the database has been established successfully.');
    
    // Synchronize the models
    await sequelize.sync({ force: false });
    console.log('Database synchronized');

    // Start the server here
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
