import React from "react";

const MyArticle = ({ article }) => {
  const { name, img } = article;
  return (
    <>
      <div className="col-md-12 pe-3 mt-4 h-100">
        <center style={{ borderRadius: "10px" }} className="companyCard">
          <img src={img} width="100%" height="60%" alt="" />
          <br />
          <br />
          <span className="skillsName">{name}</span>
        </center>
      </div>
    </>
  );
};

export default MyArticle;
