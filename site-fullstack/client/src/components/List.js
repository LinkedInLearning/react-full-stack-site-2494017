import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getPosts } from "../service"

export default function List() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      getPosts().then(setPosts)
    }, [])
    return(
    <div className="mt-5">
        {posts.map(post => {
          const title = post?.title.split(" ").join("-");
          const content = `${post?.content.substring(0, 100)} ...`
          return(
            <div key={post._id}>
                <h3><Link to={`/post/${title}`} state={{id : post._id}}>{post.title}</Link></h3>
                <p>{content}</p>
            </div>
          )
        })}
    </div>)
}