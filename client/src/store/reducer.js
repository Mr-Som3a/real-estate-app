import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './slices/user.js'
import postReducer from './slices/post.js'
import authReducer from './slices/auth.js'

export default combineReducers({
    users:userReducer,
    posts:postReducer,
    auth:authReducer
})