import React, { useState } from 'react'

export default function PostApi() {
    const [userId, setUserId]= useState("")
    const [title, setTitle]= useState("")
    const [body, setBody]= useState("")
    function saveUser() {
        console.log({userId, title,body})
        let data ={userId, title,body}
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            console.log("result", result)
        })
    }

    return (
        <div>
            <h1>POST API</h1>
            {/* controlled inputs */}
            {/* Send below data to api */}
            <input type="text" value={userId} onChange={(e)=> setUserId(e.target.value)} name="userId" /><br/><br/>    
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} name="title" /><br/><br/>
            <input type="text" value={body} onChange={(e)=> setBody(e.target.value)} name="body" /><br/><br/>
            <button type="button" onClick={saveUser}>Save new user</button>
        </div>
    )
}