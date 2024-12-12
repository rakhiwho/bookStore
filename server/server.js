import mongoose from "mongoose";
import express from "express";
 import dotenv from "dotenv"
import cors from "cors"
import { Router } from "./api.js";
import { createServer } from "http";
import { userRouter } from "./userApi.js";
 
const app =  express();
  dotenv.config({path : "./.env"})
const server = createServer(app);
app.use(express.json());
 const router = express.Router();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "DELETE"],
  })
);
app.options("*", cors()); // Allow all OPTIONS requests

app.use('/book' , Router);
app.use('/user' , userRouter);
 

mongoose
  .connect(process.env.MONGODBURL)
  .then(() => console.log("Connected to MongoDB successfully"))
  



server.listen(3001 , ()=>{
    console.log("hello world")
})
