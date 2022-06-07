import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import catsReducer from './reducers/counterSlice';
import createSagaMiddleware from 'redux-saga'
import catSaga from '../saga/catSaga';

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    catsReducer,
  },
  middleware: [saga]
});


saga.run(catSaga)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
