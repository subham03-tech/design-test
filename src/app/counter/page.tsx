"use client"
import {useState}from 'react';
export default function Counter(){
    const[name,setcount]=useState<string>("");
    return(
        <div>
            <h1>input:{name}</h1>
            <input type="text"  placeholder='name'>Name</input>
            <button onClick={()=>section(input)}>submit</button>
        </div>
    )
}