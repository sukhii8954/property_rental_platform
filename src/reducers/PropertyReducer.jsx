import React from "react";

const initialState = {
    properties: [],
};


const propertyReducer = (state = initialState,action)  =>{
    switch (action.type){
        case 'SET_PROPERTIES': 
        return {...state, properties:action.payload};

        default:
            return state;
    }
};


export default propertyReducer;