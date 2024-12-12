import axios from 'axios';
import React, { useState } from 'react'

function GetBook() {
   const [data , setData] = useState([]);
   const [loading , setLoading] = useState(true);
   

   async function getBook() {
     try {
        const res = await axios.get("http://localhost:3001/book/" , {withCredentials :  true})
        if(!res.data){
            console.log("something went wrong")
            setLoading(false);
     return;
        }
        setData(res.data);
        setLoading(false);
        return res.data
     } catch (error) {
        console.log(error)
        setLoading(false);
     }
   }
return  {getBook , data , loading}

}

export default GetBook
