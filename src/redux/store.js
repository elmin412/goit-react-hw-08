import { configureStore } from "@reduxjs/toolkit"
import filtersSlice  from '../redux/filters/slice';
import sliceContacts from '../redux/contacts/slice';
import authSlice from "../redux/auth/slice"
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH,  REHYDRATE, PAUSE,  PERSIST, PURGE,  REGISTER,
} from "redux-persist";


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};


const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

export const store = configureStore({
  reducer: {
    contacts: sliceContacts,
    filters: filtersSlice,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
