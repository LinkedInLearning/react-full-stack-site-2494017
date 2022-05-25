import React from "react"
import data from "../data"

export default function List() {
    return(
    <div className="mt-5">
        {data.map(item => {
          return(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>
          )
        })}
    </div>)
}