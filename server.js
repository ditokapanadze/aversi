require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");
connectDB();
console.log(process.env.PORT);

const app = express();

const allowedOrigins = ["http://localhost:3000"];

const options = {
  origin: allowedOrigins,
};
app.use(express.json());
app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.get("/", (req, res) => {
  res.send("Hello to  aversi API");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/product", require("./routes/product"));
app.use("/api/private", require("./routes/private"));
app.use("/api/infoupdate", require("./routes/infoUpdate"));
app.use("/api/basket", require("./routes/basket"));
// ეს ყოველთვის ბოლო უნდა იყოს
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`error: ${err}`);
  server.close(() => process.exit(1));
});
