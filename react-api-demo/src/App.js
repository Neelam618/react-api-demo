import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
  const [data, setData] =useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((result)=>{
      result.json().then((resp)=>{
        // console.log("result",resp)
        setData(resp)
      })
    })
  }, [])
  console.log(data)
  return (
   <div>
     <h1>Get API Call</h1>
     <table border="1">
       <tr>
         <td>PostId</td>
         <td>ID</td>
         <td>Name</td>
         <td>Eamil</td>
       </tr>
       {data.map((item)=>
        <tr>
          <td>{item.postId}</td>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
        </tr>
       )}
     </table>
   </div>
  );
}

export default App;