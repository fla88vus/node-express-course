console.log("Task Manager App");
const express = require("express");

const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const erroHandlerMiddleware = require("./middleware/error-handler");
// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(notFound);
app.use(erroHandlerMiddleware);
// routes

// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
    // console.log("CONNECT TO THE DB");
  } catch (error) {
    console.log(error);
  }
};
const port = process.env.PORT || 3000;

start();
