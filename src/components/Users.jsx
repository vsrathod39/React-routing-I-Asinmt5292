import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchUser = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setIsLoading(true);
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error.error);
      })
      .finally(() => setIsLoading(false));
  };
  React.useEffect(() => {
    fetchUser();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h1>User</h1>
      {users.map(({ id, first_name, last_name }) => {
        return (
          <div key={id}>
            <Link to={`/user/${id}`}>
              <p>
                {id} | {first_name + " " + last_name}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
