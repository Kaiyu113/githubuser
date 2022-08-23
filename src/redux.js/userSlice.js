import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import { userApi } from "./UserApi";

const initialState = {
  user: {},
  repos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchById = createAsyncThunk("user/fetchById", async (id) => {
  // const res = await userApi.fetchById.getUser(id);
  const res = await axios.get(`https://api.github.com/users/${id}`);
  console.log(res.data);
  return res.data;
});

export const fetchByRepo = createAsyncThunk("user/fetchByRepo", async (id) => {
  const res = await axios.get(`
    https://api.github.com/users/${id}/repos`);
  console.log(res.data);
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(fetchById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchByRepo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchByRepo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.repos = action.payload;
      })
      .addCase(fetchByRepo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default userSlice;
