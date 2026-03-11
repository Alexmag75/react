import type {IComment} from "../modeles/IComment.ts";
import {createSlice} from "@reduxjs/toolkit";

type CommentSliceType={
    comments:IComment[]
}
const initCommentSliceState:CommentSliceType={comments:[]};
export  const commentSlice=createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {
        //setComment: (state, action) => {}
    },
    extraReducers: builder => builder
});