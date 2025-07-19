import React from "react";
import "./MyArticle.css";

const MyArticle = ({ article }) => {
  const { name, img } = article;
  return (
    <>
      <div className="col-md-12 pe-3 mt-4">
        <div className="articleCard">
          <img src={img} width="100%" height="60%" alt="" />
          <p className="articleName">{name}</p>
        </div>
        <a href="" className="readMore">
          Click to Read More....
        </a>
      </div>
    </>
  );
};

export default MyArticle;
