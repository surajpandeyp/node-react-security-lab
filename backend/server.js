const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());




const loginRouter = require("./routes/routes.login");
const uploadsRoutes = require("./routes/routes.uploads");

app.use("/api", loginRouter);
app.use("/api/upload" , uploadsRoutes);

app.use("/uploads", express.static("uploads"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));




app.listen(5000, "0.0.0.0");
console.log("server runing on 5000");

