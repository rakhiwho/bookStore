import mongoose from "mongoose";
import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors"
import { Router } from "./api.js";
import { createServer } from "http";
import { userRouter } from "./userApi.js";
 
const app =  express();
 
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
  .connect("mongodb+srv://rakhydubey4:meme@book.hrump.mongodb.net/?retryWrites=true&w=majority&appName=book")
  .then(() => console.log("Connected to MongoDB successfully"))
  


server.listen(3001 , ()=>{
    console.log("hello world")
})