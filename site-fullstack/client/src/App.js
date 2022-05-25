import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Single from "./pages/Single"

export default function App() {
    return(
    <Router>   
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:title" element={<Single />} />
            </Routes>
        </Layout>
    </Router> )
}