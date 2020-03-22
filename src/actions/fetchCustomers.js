import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers = [
   {
      "dni": "27000",
      "name": "Nacho",
      "age": 32
   },
   {
      "dni": "28000",
      "name": "Nacho",
      "age": 32
   },
   {
      "dni": "29000",
      "name": "Nacho",
      "age": 32
   },
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);