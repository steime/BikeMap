import { Gebiet } from "./modelDefinition";

export const createGebiet = async (
  name: string,
  lastUpdate: string,
  openingHours: string,
  numberOfAnlagen: number,
  xCoordinate: number,
  yCoordinate: number,
  website? :string,
  region?: string,
  rating?: number, 
  price?: number 
) => {
  try {
    console.log(name);

    // Parse dates
    const parsedLastUpdate = new Date(lastUpdate);
    const parsedOeffnungszeiten = new Date(openingHours);

    // Basic null checks
    if (!name || !lastUpdate || !openingHours || !numberOfAnlagen || !xCoordinate || !yCoordinate) {
      throw new Error('Missing mandatory fields');
    }

    const gebiet = await Gebiet.create({
      name,
      lastUpdate: parsedLastUpdate,
      openingHours: parsedOeffnungszeiten,
      numberOfAnlagen,
      xCoordinate,
      yCoordinate,
      website,
      region,
      rating,
      price 
    });

    console.log('Gebiet created:', gebiet.toJSON());
    return gebiet;
  } catch (error) {
    console.error('Error creating Gebiet:', error);
    throw error; // Rethrow to handle in the calling function
  }
};