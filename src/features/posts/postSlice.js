// postSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts, createPost, deletePost } from '../../api/postApi';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const posts = await getPosts();
  return posts;
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async (post) => {
  const newPost = await createPost(post);
  return newPost;
});

export const removePost = createAsyncThunk('posts/removePost', async (id) => {
  await deletePost(id);
  return id;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
        console.log('fetch posts', action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  }
});

export default postSlice.reducer;