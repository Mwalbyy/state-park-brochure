import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile"
import Posts from "./pages/posts/Posts"
import Weather from "./pages/Weather"
import SinglePost from "./pages/SinglePost"

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") return <Home />;
    if (currentPage === "SinglePost") return <SinglePost />;
    if (currentPage === "Profile") return <Profile />;
    if (currentPage === "Posts") return <Posts />;
    if (currentPage === "Weather") return <Weather />;
    return <SinglePost />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}
