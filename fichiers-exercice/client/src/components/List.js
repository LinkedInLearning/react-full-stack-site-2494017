import React from "react"
import { Link } from "react-router-dom"
import { useAppContext } from "../context"

export default function List() {
    const { posts } = useAppContext()
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