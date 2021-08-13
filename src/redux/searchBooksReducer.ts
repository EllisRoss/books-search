import {AppStateType, InferActionTypes} from "./store";
import {Book, Categories, Filter, SortingBy} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {GetBooksResponseData, searchBooksAPI} from "../api/api";

const BOOKS_RECEIVED = 'books-search/search/BOOKS_RECEIVED';
const MORE_BOOKS_RECEIVED = 'books-search/search/MORE_BOOKS_RECEIVED';
const IS_FETCHING_BOOKS_CHANGED = 'books-search/search/IS_FETCHING_BOOKS_CHANGED';
const IS_FETCHING_BOOK_CHANGED = 'books-search/search/IS_FETCHING_BOOK_CHANGED';
const IS_FETCHING_MORE_BOOKS_CHANGED = 'books-search/search/IS_FETCHING_MORE_BOOKS_CHANGED';
const SEARCH_RESULTS_CHANGED = 'books-search/search/SEARCH_RESULTS_CHANGED';
const PAGE_SIZE_INCREMENTED = 'books-search/search/PAGE_SIZE_INCREMENTED';
const FILTER_CHANGED = 'books-search/search/FILTER_CHANGED';
const BOOK_INFO_CHANGED = 'books-search/search/BOOK_INFO_CHANGED';

const IncrementPageSizeStep = 30;

let initialState = {
    bookInfo: null as null | Book,
    filter: null as null | Filter,
    pageSize: 30,
    searchResults: 0,
    isFetchingBooks: false,
    isFetchingBook: false,
    isFetchingMoreBooks: false,
    books: [] as Book[],
};

const searchBooksReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case BOOKS_RECEIVED:
            return _booksReceived(state, action.newBooks);
        case BOOK_INFO_CHANGED:
            return _bookInfoChanged(state, action.newBookInfo);
        case MORE_BOOKS_RECEIVED:
            return _moreBooksReceived(state, action.newBooks);
        case IS_FETCHING_BOOKS_CHANGED:
            return _isFetchingBooksChanged(state, action.fetchingVal);
        case IS_FETCHING_MORE_BOOKS_CHANGED:
            return _isFetchingMoreBooksChanged(state, action.fetchingVal);
        case SEARCH_RESULTS_CHANGED:
            return _searchResultsChanged(state, action.amountOfResults);
        case PAGE_SIZE_INCREMENTED:
            return _pageSizeIncremented(state);
        case FILTER_CHANGED:
            return _filterChanged(state, action.newFilter);
        case IS_FETCHING_BOOK_CHANGED:
            return _isFetchingBookChanged(state, action.fetchingVal);
        default:
            return state;
    }
}

const _booksReceived = (state: InitialStateType, newBooks: Book[]) => {
    return {
        ...state,
        books: [...newBooks],
    }
}
const _moreBooksReceived = (state: InitialStateType, newBooks: Book[]) => {
    return {
        ...state,
        books: [...state.books, ...newBooks],
    }
}
const _isFetchingBooksChanged = (state: InitialStateType, fetchingVal: boolean) => {
    return {
        ...state,
        isFetchingBooks: fetchingVal,
    }
}
const _isFetchingBookChanged = (state: InitialStateType, fetchingVal: boolean) => {
    return {
        ...state,
        isFetchingBook: fetchingVal,
    }
}
const _isFetchingMoreBooksChanged = (state: InitialStateType, fetchingVal: boolean) => {
    return {
        ...state,
        isFetchingMoreBooks: fetchingVal,
    }
}
const _searchResultsChanged = (state: InitialStateType, amountOfResults: number) => {
    return {
        ...state,
        searchResults: amountOfResults,
    }
}
const _filterChanged = (state: InitialStateType, newFilter: Filter) => {
    return {
        ...state,
        filter: newFilter,
    }
}
const _pageSizeIncremented = (state: InitialStateType) => {
    return {
        ...state,
        pageSize: state.pageSize + IncrementPageSizeStep,
    }
}
const _bookInfoChanged = (state: InitialStateType, newBookInfo: Book) => {
    return {
        ...state,
        bookInfo: newBookInfo,
    }
}

export const searchBooksActions = {
    booksReceived: (newBooks: Book[]) => ({type: BOOKS_RECEIVED, newBooks} as const),
    moreBooksReceived: (newBooks: Book[]) => ({type: MORE_BOOKS_RECEIVED, newBooks} as const),
    pageSizeIncremented: () => ({type: PAGE_SIZE_INCREMENTED} as const),
    isFetchingBooksChanged: (fetchingVal: boolean) => ({type: IS_FETCHING_BOOKS_CHANGED, fetchingVal} as const),
    isFetchingBookChanged: (fetchingVal: boolean) => ({type: IS_FETCHING_BOOK_CHANGED, fetchingVal} as const),
    searchResultsChanged: (amountOfResults: number) => ({type: SEARCH_RESULTS_CHANGED, amountOfResults} as const),
    filterChanged: (newFilter: Filter) => ({type: FILTER_CHANGED, newFilter} as const),
    isFetchingMoreBooksChanged: (fetchingVal: boolean) => ({
        type: IS_FETCHING_MORE_BOOKS_CHANGED,
        fetchingVal
    } as const),
    bookInfoChanged: (newBookInfo: Book) => ({type: BOOK_INFO_CHANGED, newBookInfo} as const),
}

// request books from server
export const getBooks = (query: string, categories: Categories, sortingBy: SortingBy): ThunkType =>
    async (dispatch) => {
        dispatch(searchBooksActions.isFetchingBooksChanged(true));

        const filter: Filter = {
            query: query,
            category: categories,
            sortBy: sortingBy,
        }
        dispatch(searchBooksActions.filterChanged(filter));
        try {
            const payload: GetBooksResponseData = await searchBooksAPI.getBooks(query, categories, sortingBy);
            if (payload.items && payload.items.length > 0) {
                dispatch(searchBooksActions.booksReceived(payload.items))
                dispatch(searchBooksActions.searchResultsChanged(payload.totalItems))
            }
        } catch (e) {
            console.error(e)
        } finally {
            dispatch(searchBooksActions.isFetchingBooksChanged(false));
        }
    }

// add next page to books array
export const loadMoreBooks = (query: string, categories: Categories, sortingBy: SortingBy, pageSize: number): ThunkType =>
    async (dispatch) => {
        dispatch(searchBooksActions.isFetchingMoreBooksChanged(true));
        try {
            const payload: GetBooksResponseData = await searchBooksAPI.getBooks(query, categories, sortingBy, pageSize);
            if (payload.items && payload.items.length > 0) {
                dispatch(searchBooksActions.moreBooksReceived(payload.items))
                dispatch(searchBooksActions.pageSizeIncremented())
            }
        } catch (e) {
            console.error(e)
        } finally {
            dispatch(searchBooksActions.isFetchingMoreBooksChanged(false));
        }
    }

// request single book
export const getBook = (id: string): ThunkType =>
    async (dispatch) => {
        dispatch(searchBooksActions.isFetchingBookChanged(true));
        try {
            const payload: Book = await searchBooksAPI.getBook(id);
            dispatch(searchBooksActions.bookInfoChanged(payload))
        } catch (e) {
            console.error(e)
        } finally {
            dispatch(searchBooksActions.isFetchingBookChanged(false));
        }
    }

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof searchBooksActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
export default searchBooksReducer;