import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './mainSlice';

export default configureStore({
  reducer: {
    mainReducer,
  },
  devTools: true,
});
// let store;
// function initStore() {
//   return configureStore({
//     reducer: {
//       mainReducer,
//     },
//     devTools: true,
//   });
// }
// export const initializeStore = (preloadedState) => {
//   let resultingStore = store ?? initStore(preloadedState);
//
//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     resultingStore = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });
//     // Reset the current store
//     store = undefined;
//   }
//
//   // For SSG and SSR always create a new store
//   if (typeof window === "undefined") return resultingStore;
//   // Create the store once in the client
//   if (!store) store = resultingStore;
//
//   return resultingStore;
// };
//
//
// let store
// function initStore(preloadedState = initialState) {
//   return createStore(
//     reducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware())
//   )
// }
//

//
// export function useStore(initialState) {
//   const store = useMemo(() => initializeStore(initialState), [initialState])
//   return store
// }
