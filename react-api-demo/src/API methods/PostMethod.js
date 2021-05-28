import React, { useState } from 'react'

export default function PostApi() {
    const [userId, setUserId]= useState("")
    const [title, setTitle]= useState("")
    const [body, setBody]= useState("")
    function saveUser() {
        console.log({userId, title,body})
        let data ={userId, title,body}
        fetch('http://localhost:3004/data', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            // console.log("result", result)  //not readable data
            result.json().then((resp)=>{
                console.log("resp", resp)  //readable data
            })
        })
    }

    return (
        <div>
            <h1>POST method</h1>
            {/* controlled inputs */}
            {/* Send below data to api */}
            <input type="number" value={userId} onChange={(e)=> setUserId(e.target.value)} name="userId" /><br/><br/>    
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} name="title" /><br/><br/>
            <input type="text" value={body} onChange={(e)=> setBody(e.target.value)} name="body" /><br/><br/>
            <button type="button" onClick={saveUser}>Save new user</button>
        </div>
    )
}
