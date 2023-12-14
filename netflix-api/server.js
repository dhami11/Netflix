const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
const url = "mongodb+srv://ali:123@cluster0.fjfykq0.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url)
  .then(() => {
    console.log("DB Connection Successfull");
  
  })
  .catch((err) => {
    console.log(err.message);
    console.log("No bueno");
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
