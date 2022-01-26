import * as types from "./actionType";

export const fav_book = (_id) => async (dispatch) => {
    // console.log("action in",_id)
  dispatch({
    type: types.FAVOURITE_BOOKS,
    // payload: {userName: res.data.title},
    payload: _id,
  });
};

export const lib_book = (books) => async (dispatch) => {
  console.log(" lib_book action in-----------",books)
  dispatch({
    type: types.LIBRARY_BOOKS,
    // payload: {userName: res.data.title},
    payload: books,
  });
};