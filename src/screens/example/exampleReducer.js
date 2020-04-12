import {EXAMPLE} from "./exampleAction"

const exampleState = {
    exampleText: "THIS IS AN EXAMPLE FROM THE REDUX STORE"
}

export const exampleReducer = (state = exampleState, action) => {

    console.log("The example reducer had started reducing")

    switch (action.type) {
        case EXAMPLE:
            console.log("example payload:", action.payload);
            return {
                ...state,
                exampleText: action.payload
            }
        break;
        
        default:
            return exampleState
    }
}