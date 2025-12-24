import { useContext } from "react"
import { AuthDispatchContext } from "../context/AuthContext"

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext);

    if(!context) {
        throw new Error("useAuthDispatch must be used inside AppProvider")
    }

    return context;
}