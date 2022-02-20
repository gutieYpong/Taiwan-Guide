import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import dataReducer from '../features/fetchDataSlice';


export default configureStore({
  reducer: {
    spot: dataReducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});