import React from 'react'
import { useAuthDispatch } from '../hooks/useAuthDispatch'

const LoginButton = () => {
    const dispatch = useAuthDispatch();

    const login = () => {
        dispatch({
            type: "LOGIN",
            payload: {name: "Firoz"},
        })
    }
  return <button onClick={login}>Login</button>
}

export default LoginButton
