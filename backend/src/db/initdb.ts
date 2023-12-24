import { DataTypes, Model, UUIDV4 } from "sequelize";
import { Anlage } from "./anlage";
import { sequelize } from "../database";

console.log(sequelize)

export class Gebiet extends Model {
  // Define attributes
  public id!: string; // Assuming UUID
  public name!: string;
  public LastUpdate!: Date;
  public Oeffnungszeiten!: Date;
  public AnzahlAnlagen!: number;
  public Region!: string;
  public Bewertung?: number;  // Optional
  public xKoordinate!: number;
  public yKoordinate!: number;
  public Preis?: number;      // Optional
  public Webseite?: string;
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
    LastUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    Oeffnungszeiten: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    AnzahlAnlagen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    Region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Bewertung: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Webseite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    xKoordinate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      unique: false,
    },
    yKoordinate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      unique: false,
    },
    Preis: {
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