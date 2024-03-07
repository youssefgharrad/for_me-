import { createStore } from "redux";
import { counterReducer } from "./Reducer";

export default createStore(counterReducer);