import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS
} from './../actions/types';
import _ from 'lodash';

export default(state = {}, action) => {
  switch(action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case FETCH_STREAMS:

      // to polaczy state z tablica z serwera z obiektami. Przypisze je do id: {} bo dzialamy na obiektach a nie tablicy
      //  a na serwerze jest to w tablicy
      return {...state, ..._.mapKeys(action.payload, 'id')}
    default:
      return state;
  };
};