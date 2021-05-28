import React, { useEffect, useState } from 'react'

export default function GetApi() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((result) => {
            result.json().then((resp) => {
                // console.log("result",resp)
                setData(resp)
            })
        })
    }, [])
    console.log(data)

    return (
        <div>
            <h1>GET method</h1>
            <table border="1">
                <tr>
                    <th>PostId</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Eamil</th>
                </tr>
                {data.map((item) =>
                    <tr>
                        <td>{item.postId}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}
