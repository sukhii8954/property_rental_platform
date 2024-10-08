import { combineReducers } from "redux";
import propertyReducer from "./PropertyReducer";

const RootReducer = combineReducers ( {
    
    property: propertyReducer,
})

export default RootReducer
