import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

const enhancer = compose(applyMiddleware(thunk));

export default function configureStore() {
  const store = createStore(reducer, {}, enhancer);
  if (module.hot) {
    module.hot.accept(() =>
      store.replaceReducer(require("../reducers").default)
    );
  }
  return store;
}
