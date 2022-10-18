import React, { useEffect, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchForm from "./components/SearchForm";

export default function App() {
  const [closedNav, setClosedNav] = useState(false);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  return (
    <>
      <div className="flex">
        {/* nav section */}

        <div
          className={
            getNavWidth() +
            " min-h-screen bg-red-100 transition-width border border-right"
          }
        >
          <div className="sticky top-0">
            <Navbar closed={closedNav} setLogOut={() => {}} />
          </div>
        </div>

        {/* content section */}

        <div className="flex-1 min-h-screen bg-gray-100">
          <div className="sticky top-0">
            <div className="flex item-center p-2 space-x-2">
              <button onClick={toggleNav}>
                {closedNav ? (
                  <AiOutlineMenuUnfold size="25" />
                ) : (
                  <AiOutlineMenuFold size="25" />
                )}
              </button>

              <SearchForm />
            </div>
          </div>

          {/* Create The Routes Here */}
          <div className="max-w-screen-lg mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />

              {/* <Route path="*" element={<Demo />} /> */}
            </Routes>
          </div>
        </div>
      </div>
      {/* <Login /> */}
    </>
  );
}
