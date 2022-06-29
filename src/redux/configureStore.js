import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { reducerNa, reducerCa, reducerSa, reducerTc, fetchNa, fetchCa, fetchSa, fetchTc } from './countries/fetchData';

const store = configureStore({
  reducer: {
    nortAmerica: reducerNa,
    centralAmerica: reducerCa,
    southAmerica: reducerSa,
    theCaribbean: reducerTc,
  },
  applyMiddleware: [thunk],
});

store.subscribe(() => { store.getState(); });
store.dispatch(fetchNa());
store.dispatch(fetchCa());
store.dispatch(fetchSa());
store.dispatch(fetchTc());

export default store;
