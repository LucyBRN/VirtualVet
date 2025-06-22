require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DATABASE;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connection() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("connected to mongodb...");
  } catch (err) {
    console.log(err);
  }
}
connection().catch(console.dir);

module.exports.connection = connection;
