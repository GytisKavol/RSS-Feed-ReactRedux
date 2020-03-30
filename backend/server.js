const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const articlesFilterRouter = require("./routes/articlesFilterRoute");
const articlesRouter = require("./routes/articlesRoute");
const urlsRouter = require("./routes/urlsRoute");
const keywordsRouter = require("./routes/keywordsRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/articlesFiltered", articlesFilterRouter);
app.use("/articles", articlesRouter);
app.use("/urls", urlsRouter);
app.use("/keywords", keywordsRouter);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`
  )
);
