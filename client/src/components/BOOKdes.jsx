import React from "react";
import "./style.css";
import axios from "axios";

function BOOKdes({ bookName, description, bookId, author }) {
  const handleDelete = async()=> {
    console.log(bookId)
    try {
      const res = await axios.delete(
        `http://localhost:3001/book/delete?bookId=${bookId}`,
        { withCredentials: true }
      );

      if (res.data) {
        window.location.reload();
      } else {
        alert("could not delete the book");
      }
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className="head">
      <h1>Name : {bookName}</h1>

      <p>
        {" "}
        description :<br></br>
        {description}
      </p>

      <h4>author:{author}</h4>

      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default BOOKdes;
