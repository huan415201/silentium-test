import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './reducers';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
