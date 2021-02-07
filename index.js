const express = require("express");

const app = express();
const bukuApp = require("./Routes/books");

app.use(bukuApp);

app.listen(8080, () => {
  console.log("Server is Online!");
});
