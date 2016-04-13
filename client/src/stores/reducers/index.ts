import {combineReducers} from "redux/index";
import {selectedItem} from "./assets/ListReducer";


export const rootReducer = combineReducers({
    selectedItem
})