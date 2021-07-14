import {AppStateType, InferActionTypes} from "./store";
import {Book} from "../types/types";

const BOOKS_RECEIVED = 'books-search/search/BOOKS_RECEIVED';

let initialState = {
    searchResults: 0,
    books: [] as Book[],
};

const searchBooksReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case BOOKS_RECEIVED:
            return booksReceived(state, action.newBooks)
        default:
            return state;
    }
}

const booksReceived = (state: InitialStateType, newBooks: Book[]) => {
    return {
        ...state,
        books: [...newBooks],
    }
}

export const searchBooksActions = {
    booksReceived: (newBooks: Book[]) => ({type: BOOKS_RECEIVED, newBooks})
}

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof searchBooksActions>;
export default searchBooksReducer;