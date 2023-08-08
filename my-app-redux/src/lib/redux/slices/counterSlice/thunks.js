import { selectCount } from './selectors';
import { counterSlice } from './counterSlice';

export const incrementIfOddAsync = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());

  if (currentValue % 2 === 1) {
    dispatch(counterSlice.actions.incrementByAmount(amount));
  }
};

export const incrementIfEvenAsync = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());

  if (currentValue % 2 === 0) {
    dispatch(counterSlice.actions.incrementByAmount(amount));
  }
};
