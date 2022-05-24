import { getPosts, insertPost } from "./handlers"

module.exports = (app) => {
    app.get("/", getPosts);
    app.post("/insert", insertPost);
}