import { Gebiet } from "./initdb";

export const createGebiet = async (
  name: string,
  LastUpdate: string,
  Oeffnungszeiten: string,
  AnzahlAnlagen: number,
  Region: string,
  Webseite :string,
  xKoordinate: number,
  yKoordinate: number,
  Bewertung?: number,  // Optional
  Preis?: number       // Optional
) => {
  try {
    console.log(name);

    // Parse dates
    const parsedLastUpdate = new Date(LastUpdate);
    const parsedOeffnungszeiten = new Date(Oeffnungszeiten);

    // Basic null checks
    if (!name || !LastUpdate || !Oeffnungszeiten || !AnzahlAnlagen || !Region || !xKoordinate || !yKoordinate || !Webseite) {
      throw new Error('Missing mandatory fields');
    }

    const gebiet = await Gebiet.create({
      name,
      LastUpdate: parsedLastUpdate,
      Oeffnungszeiten: parsedOeffnungszeiten,
      AnzahlAnlagen,
      Region,
      Webseite,
      xKoordinate,
      yKoordinate,
      Bewertung, // Can be undefined
      Preis      // Can be undefined
    });

    console.log('Gebiet created:', gebiet.toJSON());
    return gebiet;
  } catch (error) {
    console.error('Error creating Gebiet:', error);
    throw error; // Rethrow to handle in the calling function
  }
};