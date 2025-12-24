import { useContext } from "react"
import { AuthStateContext } from "../context/AuthContext"

export const useAuthState = () => {
    const context = useContext(AuthStateContext);

    if(!context) {
        throw new Error("useAuthState must be used inside AppProvider")
    }
    return context;
}