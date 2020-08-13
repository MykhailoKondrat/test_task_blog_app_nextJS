import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../utils/axiosInstance";
import { AppState, MyPost, NewPost, Posts } from "../interfaces/interfaces";

const initialState: AppState = {
  posts: [],
  loading: false,
  error: false,
};

export const fetchPosts = createAsyncThunk("main/fetchPosts", async () => {
  const response: Posts = await axios.get("/posts");
  return response;
});
export const submitPost = createAsyncThunk(
  "main/submitPost",
  async (data: NewPost) => {
    const response = await axios.post("/posts", data);
    return response;
  }
);

export const mainReducer = createSlice({
  name: "main",
  initialState,
  reducers: {
    updateState: (state, { payload }: PayloadAction<MyPost[]>) => {
      state.posts = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.posts = payload.data;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(submitPost.fulfilled, (state) => {
      state.loading = false;
      state.error = false;
    });
    builder.addCase(submitPost.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(submitPost.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});
export const { updateState: updateStateActionCreator } = mainReducer.actions;

export default mainReducer.reducer;
