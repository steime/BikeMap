import { Anlage } from "./modelDefinition";

export const createAnlage = async (name: string, Betriebsdaten: Date, Betriebszeit: Date, Biketransport: number, Status: number) => {
  try {
    const anlage = await Anlage.create({ name, Betriebsdaten, Betriebszeit, Biketransport, Status });
    console.log('Anlage created:', anlage.toJSON());
  } catch (error) {
    console.error('Error creating Anlage:', error);
  }
};