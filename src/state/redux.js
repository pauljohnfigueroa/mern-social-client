import { createSlice } from "@reduxjs/toolkit";

// Global app state
const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: []
}

export const authSlice = createSlice({
    auth,
    initialState,
    // reducer are functions that modify the global state
    reducers: {
        // change theme to light or dark mode
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends
            } else {
                console.error("User's friends are non-existent.")
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map(post => {
                if (post._id === action.payload.post_id) return action.payload.post

                return post
            })

            state.posts = updatedPosts
        }
    }

})

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions
export default authSlice.reducer