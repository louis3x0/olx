const express = require("express");
const cors = require("cors");
const path = require("path");
const { connectDb } = require("./helpers/dbHelper");

const dotenv = require("dotenv");
dotenv.config();
connectDb();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/api", require("./routes"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Serverul functioneaza pe portul ${PORT}`));
