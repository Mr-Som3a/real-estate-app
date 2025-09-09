import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, getPosts, putPost } from "../../../api/posts";

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  try {
    const { data } = await getPosts();
    return data;
  } catch (err) {
    return (postSlice.getInitialState().error = err.message);
  }
});
export const addPost = createAsyncThunk("posts/add", async (data) => {
  try {
    const { data } = await createPost();
    return data;
  } catch (err) {
    return (postSlice.getInitialState().error = err.message);
  }
});
export const updatePost = createAsyncThunk("posts/update", async (data, id) => {
  try {
    const { data } = await putPost(data, id);
    return data;
  } catch (err) {
    return (userSlice.getInitialState().error = err.message);
  }
});
export const removePost = createAsyncThunk("posts/delete", async (id) => {
  try {
    deletePost(id);
    return id;
  } catch (err) {
    return (postSlice.getInitialState().error = err.message);
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = "success";
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.state = "success";
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })

      // Optional: Handle loading and errors
      .addMatcher(
        (action) =>
          action.type.startsWith("posts/") && action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("posts/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "loading";
          state.error = action.error.message;
        }
      );
  },
});

export default postSlice.reducer;
