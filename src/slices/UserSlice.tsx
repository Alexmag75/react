import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../modeles/IUser.ts";
import {userService} from "../services/api.service.ts";
import type {AxiosError} from "axios";

type UserSliceType={
    users:IUser[]
}
const initUserSliceState:UserSliceType={users:[]};

const loadUsers=createAsyncThunk("loadUsers",async (_,thunkAPI )=>{

    try{
        const users=await userService.getAllUsers();
        return thunkAPI.fulfillWithValue(users)
    }catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.status || 'Server Error');
    }
});

export  const userSlice=createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadUsers.fulfilled,()=>{
        state.users=action.paiload
    })
});
export const userActions={...userSlice.actions,loadUsers};