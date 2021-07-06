const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDb = require("./helpers/dbHelper");

const dotenv = require("dotenv");
dotenv.config();
connectDb();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => `Serverul functioneaza pe portul ${PORT}`);
