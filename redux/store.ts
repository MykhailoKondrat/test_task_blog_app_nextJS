import { configureStore, getDefaultMiddleware, Store } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";

const initStore = (initialState: []): Store | any =>
  configureStore({
    reducer: {
      mainReducer,
    },
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["main/fetchPosts/fulfilled"],
      },
    }),
    preloadedState: { mainReducer: { posts: initialState } },

    devTools: true,
  });

export default initStore;
