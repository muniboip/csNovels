import { FAVOURITE_BOOKS } from "../actions/actionType";
import BOOK_CARD from "../../Assets/Images/book-card.png";

const initialState = {
  books: [
    {
      _id: 1,
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      heading: "great marshal",
      chapters: 3471,
      status: "completed",
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
      isFavorite: false,
    },
    {
      _id: 2,
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      heading: "great marshal",
      status: "completed",
      chapters: 3472,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is B placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
      isFavorite: false,
    },
    {
      _id: 12,
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      heading: "great marshal",
      chapters: 3473,
      status: "completed",
      image: BOOK_CARD,
      description:
        "Lorem ipsum is C placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
      isFavorite: false,
    },
  ],
};

export function books_reducer(state = initialState, action) {
  // console.log(state.books._id)

  switch (action.type) {
    case FAVOURITE_BOOKS:
      // console.log("books_reducer", action.payload);
      let _id = action.payload;
      // console.log(state.books);
      let index = 0;
      // const index = state.books.findIndex();
      state.books.map((ele, idex) => {
        if (ele._id === _id) {
          index = idex;
        }
      });
      // console.log("in redux index::::::::::", index);
      // let copyArray = [...state.books];
      let copyArray = state.books.slice();
      copyArray[index].isFavorite = !copyArray[index].isFavorite;
      if (copyArray[index].isFavorite===false) {
        copyArray.splice(
          index,2
        )
      }
      // console.log({ copyArray });
      // copyArray[]
      return {
        ...state,
        ...copyArray,
      };

    default:
      return state;
  }
}
