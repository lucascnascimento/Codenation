import React, { useState, useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";

const ProfileRoute = () => {
  return (
    <div data-testid="profile-route">
      <UserProfile />
      <UserPosts />
    </div>
  );
};

export default ProfileRoute;
