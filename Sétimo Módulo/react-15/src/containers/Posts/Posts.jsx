import React from "react";

import Post from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <Post />
  </div>
);

export default Posts;
