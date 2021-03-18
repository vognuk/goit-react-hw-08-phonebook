import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import contactsReducer from './contacts/contactsReducer'
import loading from './contacts/contactsReducer'
// import logger from 'redux-logger'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { authReducer } from './auth'
import storage from 'redux-persist/lib/storage'
// import { todosReducer } from './todos';

console.log(authReducer);

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
            ],
        },
    }),
    // logger
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
    },
    loading,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
