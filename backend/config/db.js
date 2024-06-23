const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_URI;

async function connectDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  return client.db(process.env.DB_NAME);
}

module.exports = connectDB;
