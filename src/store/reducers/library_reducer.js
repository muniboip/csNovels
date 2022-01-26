// import BOOK_CARD from "../../Assets/Images/book-card.png";
// import React from "react";
// import { books_reducer } from "./books_reducer";
// import * as actionType from '../actions/actionType'
import { LIBRARY_BOOKS } from "../actions/actionType";


const initialState = []


export function library_reducer(state = initialState, action) {
    switch (action.type) {
        case LIBRARY_BOOKS:
            console.log("library_reducer action",action)
            let library_array = [action.payload]
            console.log("library_reducermmmmmmmmmmm",library_array)
            return library_array;
        default:
            return state;
    }
}
