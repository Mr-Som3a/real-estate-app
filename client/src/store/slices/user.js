import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers, createUser, putUser, deleteUser } from "../../../api/users.js";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const { data } = await getUsers();
    console.log(data)
    return data;
  } catch (err) {
    console.log(data)
    return (userSlice.getInitialState().error = err.message);
  }
});
export const addUser = createAsyncThunk("users/add", async (reqBody) => {
  try {
    const { data } = await createUser(reqBody);
    return data;
  } catch (err) {
    return (userSlice.getInitialState().error = err.message);
  }
});
export const updateUser = createAsyncThunk("users/update", async (reqBody, id) => {
  try {
    const { data } = await putUser(reqBody, id);
    return data;
  } catch (err) {
    return (userSlice.getInitialState().error = err.message);
  }
});
export const removeUser = createAsyncThunk("users/delete", async (id) => {
  try {
    deleteUser(id);
    return id;
  } catch (err) {
    return (userSlice.getInitialState().error = err.message);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.state = "succeeded";
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      })

      // Optional: Handle loading and errors
      .addMatcher(
        (action) =>
          action.type.startsWith("users/") && action.type.endsWith("/pending"),
        (state) => {
          state.status = 'loading';
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("users/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      );
  },
});

export default userSlice.reducer;
