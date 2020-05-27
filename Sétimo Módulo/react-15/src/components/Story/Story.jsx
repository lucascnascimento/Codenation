import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";

import "./Story.scss";

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to="/users/blackpanther">
              <img
                className="user__thumb"
                src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg"
                alt="T'Challa"
              />
            </Link>
            <Link to="/users/blackpanther" className="user__name">
              T'Challa
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
          <video
            className="video-player"
            src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/black-panther/black-panther-stories.mp4"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Story;
