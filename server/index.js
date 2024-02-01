//external packages
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

//internal packages
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config(); //allows us to pull our environment variables from our .env file

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

//created api end points that we can use from the front end side
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server started on port http://localhost:8080")
    );
  } catch (err) {
    console.error(err);
  }
};

startServer();
