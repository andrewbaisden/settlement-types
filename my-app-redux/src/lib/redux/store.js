import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux';

import { reducer } from './rootReducer';

export const reduxStore = configureStore({
  reducer,
});
export const useDispatch = () => useReduxDispatch();
export const useSelector = useReduxSelector;
