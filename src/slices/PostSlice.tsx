import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../modeles/IPost.ts";
import {postService} from "../services/api.service.ts";
import type {AxiosError} from "axios";

type PostSliceType={
    length: any;
    posts:IPost[]
}
const initPostSliceState:PostSliceType={posts:[]};
const loadPosts=createAsyncThunk("loadPosts",async (_,thunkAPI )=>{
    try{
        const posts=await postService.getAllPosts();
        return thunkAPI.fulfillWithValue(posts)
    }catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.status || 'Server Error');
    }
});
export  const postSlice=createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadPosts.fulfilled,(state, action:PayloadAction<IPost[]>)=>{
        state.posts=action.payload
    })
});
export const postActions={...postSlice.actions,loadPosts};
