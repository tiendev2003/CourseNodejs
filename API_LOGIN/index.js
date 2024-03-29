const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.route");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
