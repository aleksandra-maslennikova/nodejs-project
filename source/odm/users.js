// Core
import mongoose from "mongoose";

// Document shape
const schema = new mongoose.Schema({
  hash: String,
  name: {
    first: String,
    last: String
  },
  emails: [
    {
      email: String,
      primary: Boolean
    }
  ],
  phones: [
    {
      phone: String,
      primary: Boolean
    }
  ],
  password: String,
  created: String,
  modified: String
});

// Collection
export const user = mongoose.model("users", schema);
