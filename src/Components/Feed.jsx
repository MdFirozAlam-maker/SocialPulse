import React from 'react'
import { useLikesState } from "../hooks/useLikesState"
import LikeButton from './LikeButton'
import { usePostsState } from '../hooks/usePostsState'
import CreatePost from './CreatePost'

const Feed = () => {
    const { likes } = useLikesState()
    const { posts } = usePostsState()

    const formatTime = (timestamp) => {
        if (!timestamp) return 'Just now'
        const date = new Date(timestamp)
        const now = new Date()
        const diffMs = now - date
        const diffMins = Math.floor(diffMs / 60000)
        
        if (diffMins < 1) return 'Just now'
        if (diffMins < 60) return `${diffMins}m ago`
        if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`
        return date.toLocaleDateString()
    }

    return (
        <section className='feed'>
            <h3>Feed</h3>

            <CreatePost />

            <div className='posts-list'>
                {posts.length === 0 ? (
                    <div className="empty-state">
                        <p>📝 No posts yet. Be the first to share something!</p>
                        <p className="mt-2 text-gray-400">
                            Your posts will appear here
                        </p>
                    </div>
                ) : (
                    posts.map(post => (
                        <div className='post-card' key={post.id}>
                            <div className='post-header'>
                                <div className="user-info">
                                    <div className="user-avatar">
                                        {post.author?.charAt(0).toUpperCase() || 'U'}
                                    </div>
                                    <div>
                                        <div className="user-name">
                                            {post.author || "User"}
                                        </div>
                                        <small className="post-time">
                                            {formatTime(post.timestamp)}
                                        </small>
                                    </div>
                                </div>
                            </div>

                            <p className='post-content'>{post.content}</p>

                            <div className='post-actions'>
                                <LikeButton postId={post.id} />
                                <button className="like-button">
                                    💬 Comment
                                </button>
                                <button className="like-button">
                                    🔗 Share
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {likes >= 10 && (
                <div className="badge">
                    🔥 Trending Post
                </div>
            )}
        </section>
    )
}

export default Feed