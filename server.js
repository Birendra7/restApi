import "dotenv/config";
import app from "./src/app.js";
import { connect } from "mongoose";
import connectDB from "./src/common/config/db.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});


const start = async () => {
  // connect to database here
   await connectDB();
  app.listen(PORT, () => {
    console.log(
      `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`,
    );
  });
};

// gracefully handle unhandled promise rejections

start().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});


