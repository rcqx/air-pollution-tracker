import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerCountries, { fetchCountries } from './countries/fetchCountries';

const rootReducer = reducerCountries;

const store = configureStore({
  reducer: {
    countries: rootReducer,
  },
  applyMiddleware: [thunk],
});

store.subscribe(() => { store.getState(); });
store.dispatch(fetchCountries());

export default store; 