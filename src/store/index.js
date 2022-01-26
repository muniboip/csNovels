import {createStore, combineReducers, applyMiddleware} from 'redux';
import {books_reducer} from './reducers/books_reducer';
import {library_reducer} from './reducers/library_reducer'
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const presistConfig = {
    key:'root',
    storage:storage,
    whitelist:['library_reducer']
}

const rootReducer = combineReducers({books_reducer,library_reducer});
const persistedReducer = persistReducer(presistConfig, rootReducer);

const store = createStore(persistedReducer,{},applyMiddleware(thunk));
let persistor = persistStore(store);


export {persistor,store};
