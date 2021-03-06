// Core
import mongoose from 'mongoose';
import dg from 'debug';
import hashPlugin from '../plugins/addHash';

// Instruments
import { getDbName, getDbUrl } from '../helpers';

const debug = dg('db');
const DB_NAME = getDbName();
const DB_URL = getDbUrl();



mongoose.plugin(hashPlugin, { index: true });

const mongooseOptions = {
    promiseLibrary:    global.Promise,
    poolSize:          10,
    keepAlive:         30000,
    connectTimeoutMS:  5000,
    reconnectTries:    Number.MAX_SAFE_INTEGER,
    reconnectInterval: 5000,
    useNewUrlParser:   true,
    useFindAndModify:  false,
    useCreateIndex:    true,
};


const connection = mongoose.connect(`${DB_URL}/${DB_NAME}`, mongooseOptions);


connection
    .then(() => {
        debug(`DB '${DB_NAME}' connected`);
    })
    .catch(({ message }) => {
        debug(`DB ${DB_NAME} connectionError: ${message}`);
    });
