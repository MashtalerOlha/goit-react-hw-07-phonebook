import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactApi';
import  {filterSlice}  from './contactsSlice';


export const store = configureStore({
  reducer: {
    [filterSlice.name]: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
