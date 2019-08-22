import express from 'express';

// Instruments
import { get, post } from './router';
import {  validator, authenticate } from '../../helpers';

// Schema
import { createStaff } from '../../schemas';

export const router = express.Router();

router.get('/', [ authenticate ], get);
router.post('/', [ validator(createStaff) ], post);

export { router as staff };
