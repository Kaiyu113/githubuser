import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
const UserHome = () => {
  const { user, repos } = useSelector((state) => state.user);
  const navigtate = useNavigate();
  const backOnclick = () => {
    navigtate("/");
  };
  console.log(repos[0]);

  return (
    <div>
      <button onClick={backOnclick}>Back</button>
      <h1>UserHome</h1>
      <div>UserName:{user.login}</div>
      <div>Follower:{user.followers}</div>
      <div>
        RepoInfo:User {user.login} with {user.followers} followers is following{" "}
        {user.following}. One repo for this user is and it is private.
      </div>
    </div>
  );
};
export default UserHome;
