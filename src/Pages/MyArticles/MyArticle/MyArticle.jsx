import React from "react";
import "./MyArticle.css";

const MyArticle = ({ article }) => {
  const { articleName, img, articleLink } = article;
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
          <br />
          <p className="readMore">Click to Read More....</p>
        </a>
      </div>
    </>
  );
};

export default MyArticle;
