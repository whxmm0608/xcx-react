import { createStore, applyMiddleware } from "redux";
import reducer from "./count_reducer";

import { composeWithDevTools } from '@redux-devtools/extension';
//用于支持异步action
import thunk from "redux-thunk";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
