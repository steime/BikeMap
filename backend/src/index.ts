import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import { sequelize } from './database';
import gebieteRouter from './routes/gebieteRoutes'

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

// API endpoints
app.use('/api', gebieteRouter);

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
