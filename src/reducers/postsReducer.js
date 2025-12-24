export const postsInitialState = {
    posts: [],
};

export function postsReducer(state, action) {
    switch (action.type) {
        case "ADD_POST":
            return {
                posts: [...state.posts, action.payload],
            }

        case "REMOVE_POST":
            return {
                posts: state.posts.filter(p => p.id !== action.payload),
            }


        default:
            return state;
    }
}