import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import Reducer from "./reducer";

// const logger = createLogger()
export const store = createStore(Reducer, applyMiddleware(logger));
