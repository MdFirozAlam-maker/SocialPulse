import React from 'react'
import { useLikesDispatch } from '../hooks/useLikesDispatch'

const LikeButton = () => {
    const dispatch = useLikesDispatch();
  return (
    <button onClick={() => dispatch({type: "LIKE"})}>Like</button>
  )
}

export default LikeButton