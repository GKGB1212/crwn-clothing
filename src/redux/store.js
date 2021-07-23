import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";

//phần mềm trung gian sẽ là tập hợp các hàm để trong 1 mảng

const middlewares=[logger];

const store=createStore(rootReducer,applyMiddleware(...middlewares));

export default store;