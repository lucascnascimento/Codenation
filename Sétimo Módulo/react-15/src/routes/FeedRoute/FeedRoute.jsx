import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  // Carrega os usuários
  useEffect(() => {
    async function fetchUsers() {
      fetch("	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
        .then((res) => res.json())
        .then((response) => {
          setUsers(response);
        });
    }

    fetchUsers();
  }, []);

  // Carrega os stories
  useEffect(() => {
    if (users.length > 0) {
      async function fetchStories() {
        fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories")
          .then((res) => res.json())
          .then((response) => {
            setStories(response);
          });
      }
      fetchStories();
    }
  }, [users]);

  // Carrega os Posts
  useEffect(() => {
    if (users.length > 0) {
      Promise.all(
        users.map(async (user) => {
          return fetch(
            `	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`
          )
            .then((res) => res.json())
            .then((res) => res);
        })
      ).then((res) => {
        res.forEach((stories) => {
          stories.length > 0 &&
            stories.forEach((post) => {
              setPosts((prevPosts) => [...prevPosts, post]);
            });
        });
        setLoading(false);
      });
    }
  }, [users]);

  // Busca o id do usuário
  const getUserHandler = (id) => {
    if (users) {
      const user = users.find((user) => user.id === id);
      return user ? user : null;
    }
  };

  return (
    <div className="feed" data-testid="feed-route">
      {users.length > 0 && stories.length > 0 && (
        <Stories stories={stories} getUserHandler={getUserHandler} />
      )}

      {loading ? (
        <Loading />
      ) : (
        posts && <Posts posts={posts} getUserHandler={getUserHandler} />
      )}
    </div>
  );
};

export default FeedRoute;
