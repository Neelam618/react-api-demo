import React, { useEffect, useState } from 'react'

export default function PutMethod() {
    const [data, setData] = useState([])

    const [userId, setUserId] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [id, setId] = useState(null)


    useEffect(() => {
        refreshData()
    }, [])
    // console.log(data)

    function refreshData() {
        fetch("http://localhost:3004/data").then((result) => {
            result.json().then((resp) => {
                // console.log("result",resp)
                setData(resp)
                setUserId(resp[0].userId)
                setTitle(resp[0].title)
                setBody(resp[0].body)
                setId(resp[0].id)
            })
        })
    }

    function deleteUser(id) {
        // alert(id)
        fetch(`http://localhost:3004/data/${id}`, {  // or fetch("http://localhost:3004/data/"+id)
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                refreshData()
                console.log(resp)
            })
        })
    }

    function selectUser(id) {
        console.log(data[id - 1])
        setUserId(data[id - 1].userId)
        setTitle(data[id - 1].title)
        setBody(data[id - 1].body)
        setId(data[id-1].id)
    }

    function updateUser() {
        // console.log(userId, title, body)
        let item= {userId, title, body}

        fetch(`http://localhost:3004/data/${id}`, {  // or fetch("http://localhost:3004/data/"+id)
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                refreshData()
                console.log(resp)
            })
        })
    }

    return (
        <div>
            <h1>PUT method</h1>
            <div style={{ display: 'flex' }}>
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
                            <td><button onClick={() => deleteUser(data.id)}>Delete</button></td>
                            <td><button onClick={() => selectUser(data.id)}>Update</button></td>
                        </tr>
                    )}
                </table>
                <div style={{ margin: '0 3rem' }}>
                    <input value={userId} onChange={(e) => setUserId(e.target.value)} type="number" /><br /><br />
                    <textarea value={title} onChange={(e) => setTitle(e.target.value)} cols="50" /><br /><br />
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} cols="50" /><br /><br />
                    <button onClick={updateUser}>Update data</button>
                </div>
            </div>
        </div>
    )
}
