import React from "react"
import { Link } from "react-router-dom"
import data from "../data"

export default function List() {
    return(
    <div className="mt-5">
        {data.map(item => {
          const title = item.title.split(" ").join("-");
          return(
            <div key={item.id}>
                <h3><Link to={`/post/${title}`}>{item.title}</Link></h3>
                <p>{item.content}</p>
            </div>
          )
        })}
    </div>)
}