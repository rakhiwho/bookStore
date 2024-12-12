import BookModel from "../bookModel.js";
import mongoose from "mongoose";
export const deleteBook = async (req, res) => {
  const { bookId } = req.query;

  if (!bookId) {
    return res.status(400).json({ message: "Book ID is required" });
  }

  try {
    const objectId = mongoose.Types.ObjectId.isValid(bookId)
      ? new mongoose.Types.ObjectId(bookId)
      : null;

    if (!objectId) {
      return res.status(400).json({ message: "Invalid Book ID format" });
    }
    const result = await BookModel.deleteOne({_id : objectId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
