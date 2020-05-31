import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";
import Loading from "../../components/Loading";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users
  useEffect(() => {
    async function fetchUsers() {
      fetch("	https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
        .then((res) => res.json())
        .then((response) => {
          setUsers(response);
          setLoading(false);
        });
    }
    fetchUsers();
  }, []);

  return (
    <div className="container" data-testid="users-route">
      {loading ? <Loading /> : <UsersList users={users} />}
    </div>
  );
};

export default UsersRoute;
