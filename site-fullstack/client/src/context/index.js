import { createContext, useContext, useMemo, useState } from "react"
import { getPosts } from "../service"

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children}) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        getPosts().then(setPosts)
    }

    const value = useMemo(() => {
        return {
            posts, 
            fetchPosts
        }
    }, [posts])
    return <Provider value={value}>{children}</Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}

export default AppProvider;