import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"

export default function App() {
    return(
    <Router>   
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    </Router> )
}