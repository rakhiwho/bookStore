import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  
    {
        userName: {
            type: String,
            required: true,
            unique: true,
          },
        
          password: {
            type: String,
            required: true,
        
 }}
);

const UserModel = model("user", userSchema);

export default UserModel;
