import { STORE_WORD, STORE_NUMBER } from './types';

export const storeWord = word => {
  return {
    type: STORE_WORD,
    payload: word,
  };
};

export const storeNumber = num => {
  return {
    type: STORE_NUMBER,
    payload: num,
  };
};

export const getPicture = () => async dispatch => {
  const res = await fetch('https://api.unsplash.com/photos/random/?client_id=');
  const data = await res.json();
  dispatch({
    type: 'GET_PIC',
    payload: data.urls.full,
  });
};
