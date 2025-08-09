import React from "react";
import "./MyArticle.css";

const MyArticle = ({ article }) => {
  const { articleName, img, articleLink, articleDescription } = article;
  return (
    <>
      <div className="col-md-12 pe-3 mt-4">
        <a
          href={articleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="articleCard">
          <img src={img} width="100%" alt="" />
          <p className="articleName">{articleName}</p>
          <p className="articleDescription">{articleDescription}</p>

          <br />
          <p className="readMore">Click to Read More....</p>
        </a>
      </div>
    </>
  );
};

export default MyArticle;
