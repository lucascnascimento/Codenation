import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";

import "./Story.scss";

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={`/users/${user.name}`}>
              <img className="user__thumb" src={user.avatar} alt={user.name} />
            </Link>
            <Link to={`/users/${user.name}`} className="user__name">
              {user.name}
            </Link>
          </div>
          <button className="story__close" onClick={handleClose}>
            <i class="fas fa-times"></i>
          </button>
        </header>

        <div className="story__progress">
          <div className="story__progress__elapsed"></div>
        </div>

        <div className="story__video__wrapper ">
          <video autoplay className="video-player" src={story.videoUrl}></video>
        </div>
      </div>
    </section>
  );
};

export default Story;
