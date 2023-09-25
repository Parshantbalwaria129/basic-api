const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/notes-db');
  await mongoose.connect();

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error"));
db.once("open", () => {
  console.log("db is connected");
});
