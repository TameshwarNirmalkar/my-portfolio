import { useDispatch, useSelector, useStore } from "react-redux";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import type { RootState, AppStore } from "./store";

export type TDispatch = ThunkDispatch<RootState, void, UnknownAction>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<TDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppStore: () => AppStore = useStore;
