import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartSlice from "@/utils/cartSlice";
import { Provider } from "react-redux";

const persistConfig = {
  key: "root", // Key for the persisted state in storage
  storage, // Storage engine (e.g., localStorage)
  safelist: ["cartSlice", "wishlistSlice"], // Array of reducers to persist (only 'auth' in this case)
};

const rootReducer = combineReducers({
  cart: cartSlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
