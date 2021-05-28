import React, { useEffect, useState } from 'react'

export default function GetApi() {
    const [data, setData] = useState([])
    useEffect(() => {
        refreshData()
    }, [])
    console.log(data)

    function refreshData() {
        fetch("http://localhost:3004/data").then((result) => {
            result.json().then((resp) => {
                // console.log("result",resp)
                setData(resp)
            })
        })
    }

    function deleteUser(id){
        // alert(id)
        fetch(`http://localhost:3004/data/${id}`, {  // or fetch("http://localhost:3004/data/"+id)
            method: 'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                refreshData()
                console.log(resp)
            })
        })            
    }

    return (
        <div>
            <h1>Delete Method</h1>
            <table border="1">
                <tr>
                    <th>User ID</th>
                    <th>title</th>
                    <th>body</th>
                    <td>Action</td>
                </tr>
                {data.map((data) =>
                    <tr>
                        <td>{data.userId}</td>
                        <td>{data.title}</td>
                        <td>{data.body}</td>
                        <td><button onClick={()=>deleteUser(data.id)}>Delete</button></td>
                    </tr>
                )}
            </table>
        </div>
    )
}
