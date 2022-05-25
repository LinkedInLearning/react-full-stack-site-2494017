import axios from "axios";

export function getPosts() {
    return new Promise(resolve => {
        axios.get("http://localhost:4000/")
        .then(console.log)
        .catch(console.error)
    })
}