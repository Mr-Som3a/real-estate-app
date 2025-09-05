import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkAuth, login, logout, signup } from "../../../api/auth";

export const getAuthUser = createAsyncThunk("auth/check", async () => {
  try {
    const {data} = await checkAuth();
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const loginUser = createAsyncThunk("auth/login", async (body, thunkAPI) => {
   try {
     const { data } = await login(body);
    console.log(data);
    localStorage.setItem("token", data.token);
    return data.user;
   } catch (error) {

    return thunkAPI.rejectWithValue(error.response?.data?.message)
   }
});
export const signupUser = createAsyncThunk("auth/signup", async (body) => {
  const { token, newUser } = await signup(body);
  console.log(token, newUser)
  localStorage.setItem("token", token);
  return newUser;
});
export const logoutUser = createAsyncThunk("auth/logout", async () => {
try {
  console.log("ll")
  const res =await logout();
  localStorage.clear();
  return res
} catch (error) {
  console.log(error,"no")
}
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    authUser: null,
    isAdmin: false,
    error:[],
    loading:false,
  },
  reducers:{
    isLoading:(state,action)=>{
      state.loading= action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAuthUser.fulfilled, (state, action) => {
        state.authUser = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {

          state.authUser = action.payload;
        location.assign('/')
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.authUser = action.payload;
        location.assign('/')
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.authUser = null;
        state.loading=false
      })
      .addCase(loginUser.rejected,(state,action)=>{
        state.error.push(action.error.message)

      })
  },
});
export const {isLoading} = authSlice.actions
export default authSlice.reducer;
