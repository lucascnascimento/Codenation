import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories")
      .then((res) => res.json())
      .then((response) => {
        setStories(response);
        setLoading(false);
      });
  }, [loading, stories]);

  return (
    <div className="feed" data-testid="feed-route">
      <Stories stories={stories} />
      {loading ? <Loading /> : <Posts />}
    </div>
  );
};

export default FeedRoute;
