import React, { useState } from "react";

import Story from "../../components/Story";

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [actualStory, setActualStory] = useState({});
  const [actualUser, setActualUser] = useState({});

  function handleShowStory(story, user) {
    setShowStory(!showStory);
    setActualStory(story);
    setActualUser(user);
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories &&
            stories.map((story) => {
              const user = getUserHandler(story.userId);
              if (story && user) {
                return (
                  <button
                    className="user__thumb"
                    key={user.id}
                    onClick={() => handleShowStory(story, user)}
                  >
                    <div className="user__thumb__wrapper">
                      <img src={user.avatar} alt={user.name} />
                    </div>
                  </button>
                );
              }
            })}
        </div>
      </section>

      {showStory && (
        <Story
          story={actualStory}
          user={actualUser}
          handleClose={() => setShowStory(!showStory)}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
