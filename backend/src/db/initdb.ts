import { DataTypes, Sequelize } from "sequelize";
import { User } from "./user";

export  const sequelize = new Sequelize(process.env.DATABASE_URL!, {
    dialect: 'postgres',
});

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

