require("dotenv").config();

const app = require("../app.js");
const { connectMongo } = require("../src/db/connection");
const PORT = process.env.PORT || 9001;

const start = async () => {
  await connectMongo();

  app.listen(PORT, (err) => {
    if (err) {
      console.log("Sorry, something error");
    }
    console.log(`Server was started on port ${PORT}`);
  });
};

start();
