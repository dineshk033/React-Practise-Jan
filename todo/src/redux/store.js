// import { applyMiddleware, createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import Reducer from "./reducer";

// const logger = createLogger()
/**old pattern */
// export const store = createStore(Reducer, applyMiddleware(logger));
export const store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
