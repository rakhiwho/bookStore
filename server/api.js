import express from "express"; 
import { addBook } from "./controllers/addBook.js";
import { getBook } from "./controllers/getBook.js";
import { deleteBook } from "./controllers/deleteBook.js";
const  router = express.Router();
 
 

router.post('/add'  , addBook);
router.get('/' , getBook);
router.delete('/delete' ,  deleteBook);







export {router  as Router};