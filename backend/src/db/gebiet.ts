import { UUID } from "crypto";
import { Model } from "sequelize";


export class Gebiet extends Model {
    public id!: UUID;
    public name!: string;
    public LastUpdate!: Date;
    public Oeffnungszeiten!: Date;
    public AnzahlAnlagen!: number;
    public Region!: string;
    public Bewertung!: number;
    public xKoordinate!: number;
    public yKoordinate!: number;
    public Preis!: number;        
    }

export const createGebiet = async (name: string, LastUpdate: Date, Oeffnungszeiten: Date, AnzahlAnlagen: number, Region: string, Bewertung: number, xKoordinate: number, yKoordinate: number, Preis: number) => {
    try {
      const gebiet = await Gebiet.create({name, LastUpdate, Oeffnungszeiten, AnzahlAnlagen, Region, Bewertung, xKoordinate, yKoordinate, Preis });
      console.log('Gebiet created:', gebiet.toJSON());
    } catch (error) {
      console.error('Error creating Gebiet:', error);
    }
};