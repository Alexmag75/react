import {createSlice} from "@reduxjs/toolkit";
import type {IPost} from "../modeles/IPost.ts";

type PostSliceType={
    posts:IPost[]
}
const initPostSliceState:PostSliceType={posts:[]};
export  const postSlice=createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {
        //setPost: (state, action) => {}
    },
    extraReducers: builder => builder
});