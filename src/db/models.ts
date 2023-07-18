import { DataTypes, Model, Sequelize } from "sequelize";

export  const sequelize = new Sequelize(process.env.DATABASE_URL!, {
    dialect: 'postgres',
  });

export class User extends Model {
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

  export const createUser = async (name: string, email: string) => {
    try {
      const user = await User.create({ name, email });
      console.log('User created:', user.toJSON());
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };