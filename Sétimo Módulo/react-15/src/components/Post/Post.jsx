import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

const Post = ({ postInfo, userInfo }) => {
  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);

  return (
    <article className="post" data-testid="post">
      {userInfo.name && (
        <header className="post__header">
          <div className="user">
            {console.log(userInfo.username)}
            <Link to={`/users/${userInfo.username}`}>
              <img
                src={userInfo.avatar}
                alt={userInfo.name}
                className="user__thumb"
              />
            </Link>
            <Link>
              <span className="user__name">{userInfo.name}</span>
            </Link>
          </div>
          <button className="post__context" onClick={() => setFollow(!follow)}>
            <span className={follow ? "follow-btn is-following" : "follow-btn"}>
              Seguir
            </span>
          </button>
        </header>
      )}

      {postInfo.imageUrl && (
        <figure className="post__figure">
          <img src={postInfo.imageUrl} alt="" />
        </figure>
      )}

      {postInfo.imageUrl && postInfo.comments.length && userInfo.name && (
        <nav className="post__controls">
          <button className="post__control" onClick={() => setLike(!like)}>
            <i className={like ? "fas fa-heart " : "far fa-heart"}></i>
          </button>
          <div className="post__status">
            <div className="user">
              <span>
                curtido por <Link>{postInfo.comments[0].name}</Link> e outras
                <Link> {postInfo.comments.length} pessoas .</Link>
              </span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

Post.defaultProps = {
  userInfo: {},
};

export default Post;
