"use client"

import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import sidebarReducer from "../reducers/sidebarSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .prepend(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();