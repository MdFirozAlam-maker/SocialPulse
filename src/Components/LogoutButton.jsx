import React from 'react'
import { useAuthDispatch } from '../hooks/useAuthDispatch'

const LogoutButton = () => {
    const dispatch = useAuthDispatch();
  return <button onClick={() => dispatch({ type: "LOGOUT"})}>Logout</button>
}

export default LogoutButton
