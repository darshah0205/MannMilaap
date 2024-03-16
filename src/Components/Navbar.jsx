import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = ({ setGender }) => {
  return (
    <div>
      <div className="navbar flex justify-center items-center p-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-3xl text-white font-bold max-h-fit">
        MannMilaap
      </div>
      <div className="tabs">
        <ul className="flex justify-around p-4 items-center text-2xl font-bold">
          <li
            className="text-cyan-500 cursor-pointer"
            onClick={() => setGender("male")}
          >
            Gents
          </li>
          <li
            className="text-pink-500 cursor-pointer"
            onClick={() => setGender("female")}
          >
            Ladies
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
