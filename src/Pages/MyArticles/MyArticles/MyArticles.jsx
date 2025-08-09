import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import MyArticle from "../MyArticle/MyArticle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MyArticles.css";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../Hooks/useFirebase";

const MyArticles = () => {
  const [articles, setArticles] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   fetch("Articles.JSON")
  //     .then((res) => res.json())
  //     .then((data) => setArticles(data));
  // }, []);
  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "Article"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setArticles(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
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
      <div className="row articlesContainer" id="articles">
        <Carousel
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
      </div>

      <hr className="mt-4" />
    </>
  );
};

export default MyArticles;
