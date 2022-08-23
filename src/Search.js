import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchById } from "./redux.js/userSlice";
import { fetchByRepo } from "./redux.js/userSlice";

import React from "react";
const Search = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleOnchange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(fetchById(text));
    dispatch(fetchByRepo(text));
    navigate("/home");
  };

  return (
    <div className="App">
      <input value={text} onChange={handleOnchange} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};
export default Search;
