import { useContext } from "react"
import { LikesDispatchContext } from "../context/LikesContext"

export const useLikesDispatch = () => {
    const context = useContext(LikesDispatchContext);

    if(!context) {
        throw new Error("useLikesDispatch must be used inside AppProvider");
    }

    return context;
}