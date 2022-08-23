import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "./UserHome";
import Search from "./Search";
import React from "react";
//Please complete this task assignment for another manager.
//Instructions for Interview Task:
//1. Please share any user interfaces you have developed,
//if possible, on a public or private repository that we can
//access.
//2. Please read the attached Technical Task instructions
//and complete as much as possible by today.

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="Home" element={<UserHome />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
