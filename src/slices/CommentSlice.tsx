import type {IComment} from "../modeles/IComment.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {commentService} from "../services/api.service.ts";
import type {AxiosError} from "axios";

type CommentSliceType={
    length: any;
    comments:IComment[]
}
const initCommentSliceState:CommentSliceType={comments:[]};
export const loadComments=createAsyncThunk("loadComments",async (_,thunkAPI )=>{
    try{
        const posts=await commentService.getAllComments();
        return thunkAPI.fulfillWithValue(posts)
    }catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.status || 'Server Error');
    }
});
export  const commentSlice=createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadComments.fulfilled,(state, action:PayloadAction<IComment[]>)=>{
        state.comments=action.payload
    })
});
export const commentActions={...commentSlice.actions,loadComments};
