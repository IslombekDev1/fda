import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers/rootReduser";

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ['likedReduser']
}

const prsistReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(prsistReducer);
//            bu function hamisha 1 dona Reduser qabul qiladi

const persistor = persistStore(store)

export {store, persistor}