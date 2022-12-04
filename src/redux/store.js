import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/authSlice';
import { contactsApi } from './contacts/contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import { logOut } from './auth/operations';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const combinedReducer = combineReducers({
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  auth: persistedAuthReducer,
});

export const store = configureStore({
  reducer: (rootState, action) => {
    let state = rootState;
    if (logOut.match(action)) {
      state = { ...rootState, contactsApi: undefined };
    }
    return combinedReducer(state, action);
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
