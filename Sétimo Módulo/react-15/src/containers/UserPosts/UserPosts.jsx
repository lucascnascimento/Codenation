import React from "react";

import Post from "../../components/Post";

import "./UserPosts.scss";

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <Post />
  </div>
);

export default UserPosts;
