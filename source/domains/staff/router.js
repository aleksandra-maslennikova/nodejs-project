
// Instruments
import dg from 'debug';
import { Staff } from '../../controllers';

const debug = dg('router:staff');

export const get = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        const data = req.body;

        const staff = new Staff(data);
        const hash = await staff.create();


        res.status(201).json({ data: { hash } });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
