import { UUID } from "crypto";
import { Model } from "sequelize";


export class Anlage extends Model {
    public id!: UUID;
    public name!: string;
    public email!: string;
    public 
}

export const createAnlage = async (name: string, Betriebsdaten: Date, Betriebszeit: Date, Biketransport: number, Status: number) => {
    try {
      const anlage = await Anlage.create({ name, Betriebsdaten, Betriebszeit, Biketransport, Status });
      console.log('Anlage created:', anlage.toJSON());
    } catch (error) {
      console.error('Error creating Anlage:', error);
    }
};