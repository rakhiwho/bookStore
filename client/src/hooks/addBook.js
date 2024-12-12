import React, { useState } from 'react'
import axios from "axios"
function addBook() {
 
  async  function addbook(bookName , description , author){
      try {
        const res= await axios.post("http://localhost:3001/book/add" , {bookName , description , author} , {withCredentials : true})
        if(res.data){
            console.log(res.data);
    
        }
        else{
            console.log("something went wrogng")
        }
    } catch (error) {
        console.log(error)
    }

   
}
 return {addbook}
}

export default addBook
