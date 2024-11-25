import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; 
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import authAgentRouter from "./routes/authAgent.route.js";
import path from "path";
dotenv.config();

mongoose.connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB perfectly");
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

// const PORT = 3000;
app.listen(3000, () => {
  console.log(`Server is running on Port correctly!!!`);
});

 

 

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/auth/agent", authAgentRouter);
app.use('/api/listing', listingRouter);

// app.use("api/auth/agent", agentRouter)

app.use(express.static(path.join(__dirname, 'client/dist')));




app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
