import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import tourismReducer from '../features/tourismSlice';
import layoutReducer from '../features/layoutSlice';


export default configureStore({
  reducer: {
    tourism: tourismReducer,
    layout: layoutReducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});