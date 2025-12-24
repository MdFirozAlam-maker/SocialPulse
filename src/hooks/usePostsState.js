import { useContext } from "react"
import { PostsStateContext } from "../context/PostsContext";

export const usePostsState = () => {
    const context = useContext(PostsStateContext);

    if(!context) {
        throw new Error("usePostsState must be used inside AppProvider");
    }

    return context;
}