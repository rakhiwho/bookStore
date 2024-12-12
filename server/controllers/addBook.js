import BookModel from "../bookModel.js";

export const addBook = async (req, res) => {
    const { bookName , description , author } = req.body;
  
    if (!bookName || !author) {
      return res.status(400).json( "missing info");
    }
    try {
        
        const newBook = new  BookModel({ bookName , description , author });
      await newBook.save();
      res.json(newBook);
    } catch (error) {
      res.status(500).json("something went srong");
    }
  };