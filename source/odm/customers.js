   // Core
import mongoose from "mongoose";
import { user } from "./users";

// Document shape
const schema = new mongoose.Schema({
  city: String,
  country: Boolean
});

// Collection
export const customers = user.discriminator("customers", schema);
