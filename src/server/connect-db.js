import { MongoClient } from "mongodb";
const URL = `mongodb://localhost:27017/myorganizer`;

let db = null;

export async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(URL, { useNewUrlParser: true });
  db = client.db();
  console.info("Got DB,", db);
  return db;
}