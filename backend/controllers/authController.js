import bcrypt from "bcryptjs";
import { generateToken } from "../middleware/auth.js";

async function login(req, res) {
  const { username, password } = req.body;
  const db = req.app.locals.db;

  const user = await db.collection("users").findOne({ username });
  if (!user) return res.status(400).send("Invalid Credentials");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Credentials");

  const token = generateToken({ id: user._id, role: user.role });
  res.json({ token });
}

export { login };
