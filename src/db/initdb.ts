import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { User } from "./user";
import { Anlage } from "./anlage";
import { Gebiet } from "./gebiet";

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

Gebiet.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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
      unique: true,
    },
    Bewertung: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    Webseite: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    xKoordinate: {
      type: DataTypes.GEOMETRY,
      allowNull: false,
      unique: false,
    },
    yKoordinate: {
      type: DataTypes.GEOMETRY,
      allowNull: false,
      unique: false,
    },
    Preis: {
      type: DataTypes.DECIMAL,
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
      autoIncrement: true,
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