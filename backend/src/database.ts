import { Sequelize } from 'sequelize';

// Assuming you have your DATABASE_URL in environment variables
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('DATABASE_URL not set');
  process.exit(1); // Exit if DATABASE_URL is not set
}

export const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  // Add additional options here if needed
});
