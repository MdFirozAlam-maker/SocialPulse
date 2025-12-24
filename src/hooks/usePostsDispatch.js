import { useContext } from "react"
import { PostsDispatchContext } from "../context/PostsContext"

export const usePostsDispatch = () => {
    const context = useContext(PostsDispatchContext);

    if(!context) {
        throw new Error("usePostsDispatch must be used inside AppProvider")
    }

    return context;
}