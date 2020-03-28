import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";

export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger))
  );
  return store;
}
