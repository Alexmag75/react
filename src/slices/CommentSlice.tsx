import type {IComment} from "../modeles/IComment.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {commentService} from "../services/api.service.ts";
import type {AxiosError} from "axios";
import type {IUser} from "../modeles/IUser.ts";

type CommentSliceType={
    comments:IComment[]
}
const initCommentSliceState:CommentSliceType={comments:[]};
const loadComments=createAsyncThunk("loadComments",async (_,thunkAPI )=>{
    try{
        const posts=await commentService.getAllComments();
        return thunkAPI.fulfillWithValue(posts)
    }catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.status || 'Server Error');
    }
});
export  const userSlice=createSlice({
    name: 'postSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadComments.fulfilled,(state, action:PayloadAction<IUser[]>)=>{
        state.comments=action.payload
    })
});
export const userActions={...userSlice.actions,loadComments};
