import BookModel from "../bookModel.js";

export const getBook = async (req, res) => {
    
    try {
  const books = await BookModel.find();
 
      
      return res.status(200).json(books);
    } catch (error) {
      return res.status(500).json({ message: "something went wrong" });
    }
  };