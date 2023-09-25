const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  const { DATABASE_URL, DATABASE_USER, DATABASE_PASSWD, DATABASE_NAME } =
    process.env;

  // await mongoose.connect('mongodb://127.0.0.1:27017/notes-db');
  await mongoose.connect(
    `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWD}@${DATABASE_URL}/${DATABASE_NAME}?retryWrites=true&w=majority`
  );
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error"));
db.once("open", () => {
  console.log("db is connected");
});
