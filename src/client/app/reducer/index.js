/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  form: formReducer,
};

export const rootReducer = combineReducers(reducers);
