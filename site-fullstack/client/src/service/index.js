import axios from "axios";

export function getPosts() {
    return new Promise(resolve => {
        axios.get("http://localhost:4000/")
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    })
}

export function insertPost(body) {
    return new Promise(resolve => {
        axios.post("http://localhost:4000/insert", body)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    })
}
