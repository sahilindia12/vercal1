'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
const [api, setapi] = useState([]);
    useEffect(() => {
        
       const api = async()=>{
        const app= await   axios.get("https://jsonplaceholder.typicode.com/posts")
      
        setapi(app.data)
       }

       api()

    }, []);

    console.log(api.length)
  return (
    <div>page



 {
api.map((item)=>{
        return <>
        
        <div className=' mx-[22vw]'>
        <h1 className=' text-2xl  bg-pink-500 text-white mx-10 p-2 my-3 '>{item.id}</h1>
         <h1 className=' text-2xl  bg-pink-500 text-white mx-10 p-2 my-3 '>{item.userId}</h1>
         <h1 className=' text-2xl  bg-pink-500 text-white mx-10 p-2 my-3 '>{item.title}</h1>
        </div>
        </>
    })
} 
    </div>
  )
}
