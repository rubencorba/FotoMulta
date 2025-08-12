import { configureStore } from '@reduxjs/toolkit';
/* import thunk from 'redux-thunk'; */
import { reducer } from '../reducer';

export const store = configureStore({
  reducer: reducer,
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), */
});

// Inferimos los tipos de RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
