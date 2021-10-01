require("dotenv").config();

const app = require("../app.js");
const PORT = process.env.PORT || 9001;
app.listen(PORT, (err) => {
  if (err) {
    console.log("Sorry, something error");
  }
  console.log(`Server was started on port ${PORT}`);
});
