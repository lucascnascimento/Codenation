const fetchPosts = async (userId) => {
  const post = fetch(
    `	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${userId}/posts`
  )
    .then((res) => res.json())
    .then((res) => res);

  return post;
};

export { fetchPosts };
