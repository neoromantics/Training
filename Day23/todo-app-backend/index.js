const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./todoRoutes");

const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost/todoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("❌❌❌Connected to MongoDB...❗️❗️❗️"))
  .catch((err) =>
    console.error(
      "Could not connect to MongoDB..."
      // , err
    )
  );

app.use(express.json());
app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
