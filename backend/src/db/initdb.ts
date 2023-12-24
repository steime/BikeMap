import { DataTypes, Model, UUIDV4 } from "sequelize";
import { Anlage } from "./anlage";
import { sequelize } from "../database";

console.log(sequelize)

export class Gebiet extends Model {
  // Define attributes
  public id!: string; // Assuming UUID
  public name!: string;
  public lastUpdate!: Date;
  public openingHours!: Date;
  public numberOfAnlagen!: number;
  public xCoordinate!: number;
  public yCoordinate!: number;
  public website?: string;
  public region?: string;
  public rating?: number;  // Optional
  public price?: number;      // Optional
  // Add more fields as necessary
}

Gebiet.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    openingHours: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    numberOfAnlagen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    xCoordinate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      unique: false,
    },
    yCoordinate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      unique: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      unique: false,
    },     
  },
  {
    sequelize,
    modelName: 'Gebiet',
  }
);


Anlage.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    Betriebsdaten: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    Betriebszeit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Biketransport: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
    },
    Status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Anlage',
  }
);


// Assosiations between Tabels
Gebiet.hasMany(Anlage, {
  foreignKey: 'AnlageID'
});
Anlage.belongsTo(Gebiet);