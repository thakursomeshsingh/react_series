import { response } from 'express';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function GetMethod() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        console.log(response);
    });
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>singh</td>
                    <td>Hello World</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default GetMethod