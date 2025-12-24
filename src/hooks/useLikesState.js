import { useContext } from "react"
import { LikesStateContext } from "../context/LikesContext"

export const useLikesState = () => {
    const context = useContext(LikesStateContext);

    if(!context) {
        throw new Error("useLikesState must be used inside AppProvider");
    }

    return context;
}