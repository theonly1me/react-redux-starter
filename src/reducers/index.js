import { combineReducers } from 'redux';
import { STORE_NUMBER, STORE_WORD } from '../actions/types';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_WORD:
      return { ...state, word: action.payload };
    case STORE_NUMBER:
      return { ...state, number: action.payload };
    case 'GET_PIC':
      return { ...state, imageURL: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});
