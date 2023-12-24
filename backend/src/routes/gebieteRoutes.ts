import express, { Request, Response } from 'express';
import { Gebiet } from '../model/modelDefinition'
import { createGebiet } from '../model/gebiet'

const gebieteRouter = express.Router();

gebieteRouter.get('/gebiet', async (req: Request, res: Response) => {
    try {
        const gebiete = await Gebiet.findAll();
        res.json(gebiete);
    } catch (error) {
        console.error('Error fetching Gebiete:', error);
        res.status(500).json({ error: error.message });
    }
});

gebieteRouter.post('/gebiet', async (req: Request, res: Response) => {
    try {
        const { name, lastUpdate, openingHours, numberOfAnlagen, xCoordinate, yCoordinate, website, region, rating, price } = req.body;

        const newGebiet = await createGebiet(name, lastUpdate, openingHours, numberOfAnlagen, xCoordinate, yCoordinate, website, region, rating, price);

        res.status(201).json(newGebiet);
    } catch (error) {
        console.error('Error in POST /gebiete:', error);
        res.status(500).json({ error: error.message });
    }
});

export default gebieteRouter;