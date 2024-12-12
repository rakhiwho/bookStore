import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const BOOKSchema = new Schema(
  
    {
        bookName: {
            type: String,
            required: true,
            unique: true,
          },
        description: {
            type: String,
            required: true,
            minlength: 6,
          },
          author: {
            type: String,
            default: "",
        
 }}
);

const BookModel = model("book", BOOKSchema);

export default BookModel;
