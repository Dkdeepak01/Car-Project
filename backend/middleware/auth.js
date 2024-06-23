import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function generateToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
}

function authenticateToken(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid Token");
    req.user = user;
    next();
  });
}

export { generateToken, authenticateToken };
