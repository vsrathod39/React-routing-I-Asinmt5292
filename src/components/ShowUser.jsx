import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ShowUser() {
  const [user, setUser] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();

  const fetchUser = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setIsLoading(true);
        setUser(res.data.data);
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
      <img src={user.avatar} alt="user_image" />
      <p>{user.id}</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.email}</p>
    </div>
  );
}
