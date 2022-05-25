import { useMemo, useRef, useState } from "react";
import { useAppContext } from "../context"

export default function Layout({ children}) {
    const { addPost } = useAppContext(); 
    const [post, setPost] = useState({title: null, content: null})

    const inputRef = useRef()
    const textRef = useRef()
    const [isCollapsed, collapse] = useState(false)
  
    const toggleVisibility = () => collapse(!isCollapsed);
    const handleOnChange = e => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        addPost(post)
        setPost({title: null, content: null})
        inputRef.current.value= null;
        textRef.current.value= null;
        toggleVisibility(false)
    }

    const isValid = useMemo(() => {
        return Object.values(post).some(value => !value);
    }, [post])
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-primary" href="/">Fullstack M.E.R.N</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto"> 
                </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleOnChange} />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
            </nav>
            <div className="layout">
            <button className="btn btn-dark float-end" onClick={toggleVisibility}>{isCollapsed ? 'Close' : 'Add +'}</button>
            {isCollapsed && 
            <form className="mt-5" onSubmit={handleOnSubmit}>
                <input ref={inputRef} type="text" name="title" className="form-control mb-3" id="exampleInputEmail1" onChange={handleOnChange} aria-describedby="emailHelp" placeholder="title" />
                <textarea ref={textRef} name="content" rows="4"  className="form-control mb-3" onChange={handleOnChange} placeholder="content"></textarea>
                <button type="submit" className="btn btn-primary mb-5 float-end" disabled={isValid}>Submit</button>
            </form>}
                {children}
            </div>
        </>   
    )
}