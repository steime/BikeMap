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

gebieteRouter.get('/gebiet/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const gebiet = await Gebiet.findByPk(id);

        if (gebiet) {
            res.json(gebiet);
        } else {
            res.status(404).send('Gebiet not found');
        }
    } catch (error) {
        console.error('Error fetching Gebiet by ID:', error);
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

gebieteRouter.put('/gebiet/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const [updatedRows] = await Gebiet.update(updatedData, {
            where: { id: id }
        });

        if (updatedRows > 0) {
            const updatedGebiet = await Gebiet.findByPk(id);
            res.json(updatedGebiet);
        } else {
            res.status(404).send('Gebiet not found');
        }
    } catch (error) {
        console.error('Error updating Gebiet:', error);
        res.status(500).json({ error: error.message });
    }
});

gebieteRouter.delete('/gebiet/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const deleted = await Gebiet.destroy({
            where: { id: id }
        });

        if (deleted) {
            res.status(200).send('Gebiet deleted');
        } else {
            res.status(404).send('Gebiet not found');
        }
    } catch (error) {
        console.error('Error deleting Gebiet:', error);
        res.status(500).json({ error: error.message });
    }
});

export default gebieteRouter;