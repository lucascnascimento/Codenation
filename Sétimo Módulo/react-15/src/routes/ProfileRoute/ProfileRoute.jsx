import React, { useState, useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";

const ProfileRoute = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user
  useEffect(() => {
    async function fetchUser() {
      fetch(
        `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/?search=${username}`
      )
        .then((res) => res.json())
        .then((response) => {
          setUser(response[0]); // TODO passar o valor do array de resposta para objeto
        });
    }
    fetchUser();
  }, [username]);

  // Fetch user posts
  useEffect(() => {
    async function fetchUserPosts() {
      if (user.id) {
        fetch(
          `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`
        )
          .then((res) => res.json())
          .then((response) => {
            setUserPosts(response);
            setLoading(false);
          });
      }
    }
    fetchUserPosts();
  }, [user]);

  return (
    <div data-testid="profile-route">
      {loading ? (
        <Loading />
      ) : (
        <>
          <UserProfile
            avatar={user.avatar}
            name={user.name}
            username={user.username}
          />
          <UserPosts posts={userPosts} />
        </>
      )}
    </div>
  );
};

export default ProfileRoute;
