import { createStore } from "redux";
import { applyMiddleware } from "redux";

import { persistStore } from "redux-persist";

import logger from 'redux-logger';

import rootReducer from "./root-reducer";

//phần mềm trung gian sẽ là tập hợp các hàm để trong 1 mảng

const middlewares=[logger];

export const store=createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor=persistStore(store);

export default {store,persistor};
