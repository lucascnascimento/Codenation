import React, { useState } from "react";

import Story from "../../components/Story";

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          <button
            className="user__thumb"
            key="t'challa"
            onClick={() => setShowStory(!showStory)}
          >
            <div className="user__thumb__wrapper">
              <img
                src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg"
                alt="story"
              />
            </div>
          </button>
        </div>
      </section>

      {showStory && (
        <Story
          story="https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories/1"
          user="https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/1"
          handleClose={() => setShowStory(!showStory)}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
