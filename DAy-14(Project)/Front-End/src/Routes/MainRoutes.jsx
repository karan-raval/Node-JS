import React from "react";
import AddMovie from "../Components/AddMovie";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/addmovie" element={<AddMovie />}></Route>
        {/* <Route path="/deleteBook/:id" element={<DeleteBook />}></Route> */}
        <Route path="/allmovie" element={<HomePage />}></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
