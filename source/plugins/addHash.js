import { v4 } from "uuid";

const addHash = (schema, options) => {

  schema.add({
    hash: String
  });

  schema.pre("save", function(next) {

    this.hash = v4();
    next();
  });

  if (options && options.index) {
    schema.path("hash").index(true);
  }
};

export default addHash;
