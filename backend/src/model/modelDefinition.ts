import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelize } from "../database";

export class Gebiet extends Model {
  public id!: string;
  public name!: string;
  public lastUpdate!: Date;
  public openingHours!: Date;
  public numberOfAnlagen!: number;
  public xCoordinate!: number;
  public yCoordinate!: number;
  public website?: string;
  public region?: string;
  public rating?: number;  
  public price?: number;   
}

export class Anlage extends Model {
  public id!: string;
  public name!: string;
  public openingHours!: Date;
  public openDate!: string;
  public biketransport!: boolean;
  public state!: string;
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
    },
    openingHours: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    openDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    biketransport: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('in Betrieb', 'geschlossen'),
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