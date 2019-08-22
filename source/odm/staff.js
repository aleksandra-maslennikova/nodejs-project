// Core
import mongoose from 'mongoose';
import { user } from './users';

// Document shape
const schema = new mongoose.Schema({
    role:     String,
    disabled: Boolean,
});

// Collection
export const staff = user.discriminator('staff', schema);
