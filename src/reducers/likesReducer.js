export const likesInitialState = {
    likes: 0,
};

export function likesReducer(state, action) {
    switch(action.type) {
        case "LIKE":
            return {likes: state.likes + 1}

        case "DISLIKE":
            return {likes: Math.max(state.likes - 1, 0)}

        case "RESET":
            return {likes: 0}

        default:
            return state;
    }
}