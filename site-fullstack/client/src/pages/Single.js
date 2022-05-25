import React from "react"
import { useLocation } from "react-router-dom"
import data from "../data"

export default function Single() {
    const { state : { id }} = useLocation();
    const post = data.find(post => post._id === id);
    return(
    <>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </>)
}