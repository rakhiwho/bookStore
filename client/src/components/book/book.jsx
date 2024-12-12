import React, { useState } from 'react'
import "./style.css"
import addBook from '../../hooks/addBook';
import { useNavigate } from 'react-router-dom'
function Book() {
    const navigate = useNavigate();
    const[bookName , setBookName] = useState("");
    const[ description , setDescription] = useState("");
    const[ author ,  setAuthor] = useState("");

  const {addbook} = addBook();
  const handleSubmit= async(e  )=>{
    e.preventDefault();

    if(bookName === "" || author===""){
        alert("book name and author's name are required.")
    }
    else{
        addbook(bookName , description , author)
        
    }
    alert(`book ${bookName}  added successfully!`)
    setAuthor("")
    setBookName("")
    setDescription("")
  }
  return (
    <div className='head'>
        <h1>fill the book details</h1>
      <form action="">
        <input type="text" value={bookName} onChange={(e)=>setBookName(e.target.value)} name="" id="" placeholder='name' />

        <input type="text" value={description}  onChange={(e)=>setDescription(e.target.value)} placeholder='description' />
        <input type="text" placeholder='author' value={author}  onChange={(e)=>setAuthor(e.target.value)} name="" id="" />
        <button onClick={handleSubmit}>submit</button>
      </form>

      <button onClick={()=>navigate("/get")} className='btn'> see all books </button>
    </div>
  )
}

export default Book
