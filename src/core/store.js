import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

export default function configureStore() {
  const store = (process.env.NODE_ENV !== 'production') ? 
  createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger))
  )
  : createStore(
    reducer
  );
  return store;
}
