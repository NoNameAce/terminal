const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());


const pgRouter = require('./routes/tables')

app.use("/data", pgRouter)


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});