// Core
import bcrypt from "bcrypt";

// Instruments
import { staff } from "../odm";

export class Staff {
  constructor(data) {
    this.data = data;
  }

  async login() {
    const { email, password } = this.data;
    const { hash, password: userPassword } = await staff
      .findOne({ email })
      .select("password hash")
      .lean();

    const match = await bcrypt.compare(password, userPassword);

    if (!match) {
      throw new Error("Credentials are not valid");
    }

    return hash;
  }

  async createUser() {
    const { name, email, phone, role, password } = this.data;
    const [first, last] = name.split(" ");
    const emails = [{ email, primary: true }];
    const phones = [{ phone, primary: true }];
    const data = {
      name: { first, last },
      emails,
      phones,
      password,
      disabled: false,
      created: "dfdsfs",
      modified: "fsdfdsf",
      role
    };
    try {
      const user = await staff.create(data);
      return user.toObject();
    } catch ({ name, message }) {
      console.error(`${name}: ${message}`);
    }
  }
}
