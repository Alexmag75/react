import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/UserSlice.tsx";
import {postSlice} from "../slices/PostSlice.tsx";
import {commentSlice} from "../slices/CommentSlice.tsx";
import {useDispatch, useSelector} from "react-redux";

export const  store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer
    }
});

export const useAppDispatch=useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector=useSelector.withTypes<ReturnType<typeof store.getState>>();