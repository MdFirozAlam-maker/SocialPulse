import React from 'react'
import { usePostsState } from '../hooks/usePostsState'
import { useLikesState } from '../hooks/useLikesState'

const Sidebar = () => {
    const { posts } = usePostsState()
    const { likes } = useLikesState()

    const totalCharacters = posts.reduce((acc, post) => acc + (post.content?.length || 0), 0)
    const avgPostLength = posts.length > 0 ? Math.round(totalCharacters / posts.length) : 0

    return (
        <aside className='sidebar'>
            <h4>Dashboard</h4>
            
            <div className='stat-card'>
                <h5>🔥 Trending Threshold</h5>
                <p>10 likes</p>
            </div>

            <div className='stat-card'>
                <h5>Total Posts</h5>
                <p>{posts.length}</p>
            </div>
            
            <div className='stat-card'>
                <h5>Total Likes</h5>
                <p>{likes}</p>
            </div>
            
            <div className='stat-card'>
                <h5>Avg. Post Length</h5>
                <p>{avgPostLength} chars</p>
            </div>
            
            <div className="text-center mt-3 text-gray-500 text-sm">
                <p>Keep posting to see more stats!</p>
            </div>
        </aside>
    )
}

export default Sidebar