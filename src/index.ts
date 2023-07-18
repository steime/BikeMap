import express, { Request, Response } from 'express';
import { Sequelize, DataTypes, Model } from 'sequelize';

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
  .then(async () => {
    console.log('Connection to the database has been established successfully.');
    
    // Call the createUser function with name and email parameters
    await User.sync();
    createUser('John Doe', 'john@example.com');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
}, 5000);

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);



const createUser = async (name: string, email: string) => {
  try {
    const user = await User.create({ name, email });
    console.log('User created:', user.toJSON());
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

