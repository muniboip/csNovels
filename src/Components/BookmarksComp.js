import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RenderBookmarks from "./RenderBookmarks";
import BOOK_CARD from "../Assets/Images/book-card.png";

function BookmarksComp({ title }) {
  let bookmarked = [
    {
      _id: 1,
      status: "completed",
      heading: "great marshal",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 2,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 3,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 4,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 5,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 6,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },

    {
      _id: 7,
      status: "completed",
      heading: "great marshal",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 8,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 9,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 10,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 11,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 12,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
  ];
  return (
    <div className="section-div ongoing_novel">
      <div className="section-heading-div">
        <p className="section-heading">{title || "BOOKMARKS"}</p>
      </div>

      {/* </div> */}
      <div className="row row-425 spacing-adjust">
        {bookmarked.map((item, idx) => (
          <RenderBookmarks
            key={idx}
            item={item}
            onClick={() => console.log("Book Card")}
          />
        ))}
      </div>
    </div>
  );
}

export default BookmarksComp;
