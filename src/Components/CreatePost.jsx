import React, { useState } from 'react'
import { usePostsDispatch } from '../hooks/usePostsDispatch'
import { useAuthState } from '../hooks/useAuthState'

const CreatePost = () => {
    const [text, setText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = usePostsDispatch()
    const { isAuthenticated, user } = useAuthState()

    if (!isAuthenticated) return null

    const addPost = async () => {
        if (text.trim() === '') return
        
        setIsLoading(true)
        
        // Simulate API call
        setTimeout(() => {
            dispatch({
                type: "ADD_POST",
                payload: {
                    id: Date.now(),
                    content: text,
                    author: user.name || "User",
                    timestamp: new Date().toISOString(),
                    likes: 0
                }
            })
            setText("")
            setIsLoading(false)
        }, 300)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            addPost()
        }
    }

    return (
        <div className="post-input-container">
            <div className="user-info mb-2">
                <div className="user-avatar">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <span className="user-name">{user.name || "User"}</span>
            </div>
            
            <textarea
                className="post-input"
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="What's on your mind?"
                rows="4"
                style={{
                    color: '#2c3e50',backgroundColor: 'white'
                }}
            />
            
            <div className="text-right">
                <button 
                    className="post-button"
                    onClick={addPost}
                    disabled={!text.trim() || isLoading}
                >
                    {isLoading ? (
                        <>Posting...</>
                    ) : (
                        <>
                            <span>📤</span>
                            Post
                        </>
                    )}
                </button>
            </div>
            
            <small className="text-gray-500 mt-1 block">
                Press Ctrl+Enter to post
            </small>
        </div>
    )
}

export default CreatePost