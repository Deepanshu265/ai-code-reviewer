require("dotenv").config();
const app = require("./server/app");

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
