import React from 'react'
import { useAuthState } from '../hooks/useAuthState'
import { useLikesState} from '../hooks/useLikesState'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'

const Header = () => {
    const { user, isAuthenticated } = useAuthState()
    const { likes } = useLikesState()
    
    return (
        <header className='header'>
            <div className='brand'>
                <h2>SocialPulse</h2>
                <span className='subtitle'>Mini Social Platform</span>
            </div>

            <div className='header-right'>
                <div className="likes-pill">
                    <span>❤️</span>
                    <span>{likes} Total Likes</span>
                </div>

                {isAuthenticated ? (
                    <>
                        <div className="flex items-center gap-2">
                            <div className="user-avatar">
                                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <span className='username'>Hi, {user.name}</span>
                        </div>
                        <LogoutButton />
                    </>
                ) : (
                    <LoginButton />
                )}
            </div>
        </header>
    )
}

export default Header