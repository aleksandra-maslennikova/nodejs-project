// Core
import dg from 'debug';
import mongoose from "mongoose";
// Instruments
import { app } from './server';
import { getPort } from './helpers';



const port = getPort();
const debugSrv = dg('server:main');

app.listen(port, () => {
    debugSrv(`Server API is up on port ${port}`);
});
