import React, { useReducer } from 'react'
import { authInitialState, authReducer } from '../reducers/authReducer'
import { likesInitialState, likesReducer } from '../reducers/likesReducer';
import { postsInitialState, postsReducer } from '../reducers/postsReducer';
import { AuthDispatchContext, AuthStateContext } from './AuthContext';
import { LikesDispatchContext, LikesStateContext } from './LikesContext';
import { PostsDispatchContext, PostsStateContext } from './PostsContext';

const AppProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);
    const [likesState, likesDispatch] = useReducer(likesReducer, likesInitialState);
    const [postsState, postsDispatch] = useReducer(postsReducer, postsInitialState);
  return (
    <AuthStateContext.Provider value={authState}>
        <AuthDispatchContext.Provider value={authDispatch}>
            <LikesStateContext.Provider value={likesState}>
                <LikesDispatchContext.Provider value={likesDispatch}>
                    <PostsStateContext.Provider value={postsState}>
                        <PostsDispatchContext.Provider value={postsDispatch}>
                            {children}
                        </PostsDispatchContext.Provider>
                    </PostsStateContext.Provider>
                </LikesDispatchContext.Provider>
            </LikesStateContext.Provider>
        </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export default AppProvider
