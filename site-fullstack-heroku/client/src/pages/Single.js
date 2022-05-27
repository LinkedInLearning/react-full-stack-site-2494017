import React from "react"
import { useLocation, Link } from "react-router-dom"
import { useAppContext } from "../context";

export default function Single() {
    const { posts } = useAppContext()
    const params = useLocation();
    const post = posts.find(post => post._id === params?.state?.id);
    return(
    <>
        <Link to="/">back</Link>
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
    </>)
}