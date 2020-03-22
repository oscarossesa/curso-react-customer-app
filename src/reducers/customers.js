import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from './../constants/index';

export const customers = handleActions({
   [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
}, []);

// first argument represents an array of actions
// second argument represents default state