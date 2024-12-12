import React, { useEffect , useState } from 'react'
import "./style.css"
import GetBook from "../../hooks/getBook"
import { useNavigate } from 'react-router-dom'
import BOOKdes from '../BOOKdes'
import addBook from '../../hooks/addBook'

function ALLBOOKS() {
    const [data , setData] = useState([]);
    const {getBook , loading , data:data1} = GetBook();
   const navigate = useNavigate();
async function getdata(){
     const res = await  getBook();
 
     
         setData(res);
 
 }
 
  useEffect(()=>{
    getdata();
  }, [])
 
  return (
    <div className='header'>
      <h1>all book</h1>

      <div className='header_'>

         {loading && <h1>loading</h1>}
        { Array.isArray(data) && data.length >0  && data.map((b)=>(
        <div key={b._id} ><BOOKdes bookName={b.bookName} description={b.description} bookId={ b._id} author={b.author} /></div>
        ))}
         
      </div>

      <button onClick={()=>navigate("/")}>go back</button>
    </div>
  )
}

export default ALLBOOKS
