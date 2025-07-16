import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import MyArticle from "../MyArticle/MyArticle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyArticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("Articles.JSON")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <>
      <Title title="My" title2="Articles" />
      <center className="row">
        <Carousel
          className="container"
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          containerClassName="container-with-dots"
          dotListClassName=""
          infinite
          minimumTouchDrag={80}
          pauseOnHover
          responsive={responsive}
          rewind={false}
          slidesToSlide={1}
          arrows={false}>
          {articles.map((article) => (
            <MyArticle key={article.id} article={article} />
          ))}
        </Carousel>
      </center>

      <hr className="mt-4" />
    </>
  );
};

export default MyArticles;
